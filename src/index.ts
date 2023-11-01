import {compile} from 'json-schema-to-typescript'
import fs from 'fs'
import camelcase from 'camelcase'
import defaultCustomMapper from './defaultCustomMapper'
import {TYPES, generate} from './genericTypes'
import {
    StoryblokSchemaElement,
    StoryblokTsOptions,
    StoryblokStory
} from "./typings";
import {JSONSchema4} from "json-schema";

export default async function storyblokToTypescript({
                                                        componentsJson = {components: []},
                                                        compilerOptions = {},
                                                        customTypeParser,
                                                        path = 'src/typings/generated/components-schema.ts',
                                                        titleSuffix = '_storyblok',
                                                        titlePrefix = ''
                                                    }: StoryblokTsOptions) {

    compilerOptions = {
        unknownAny: false,
        bannerComment: '',
        unreachableDefinitions: true,
        ...compilerOptions
    }

    const tsString: string[] = [`import {StoryblokStory} from 'storyblok-generate-ts'`, ``]
    const getTitle = (t: string) => titlePrefix + t + titleSuffix
    const getStoryTypeTitle = (t: string) => `StoryblokStory<${camelcase(getTitle(t), {pascalCase: true})}>`

    const groupUuids: { [k: string]: JSONSchema4 } = {}

    componentsJson.components.forEach(value => {
        if (value.component_group_uuid) {
            if (!groupUuids[value.component_group_uuid]) {
                groupUuids[value.component_group_uuid] = []
            }
            groupUuids[value.component_group_uuid].push(camelcase(getTitle(value.name), {
                pascalCase: true
            }))
        }
    })

    async function genTsSchema() {
        for (const values of componentsJson.components) {
            const obj: JSONSchema4 = {
                '$id': '#/' + values.name,
                title: getTitle(values.name),
                type: 'object'
            }
            obj.properties = await typeMapper(values.schema, obj.title as string)
            obj.properties._uid = {
                type: 'string'
            }
            obj.properties.component = {
                type: 'string',
                enum: [values.name]
            }
            if (values.name === 'global' || values.name === 'page') {
                obj.properties.uuid = {
                    type: 'string'
                }
            }
            const requiredFields = ['_uid', 'component']
            Object.keys(values.schema).forEach(key => {
                if (values.schema[key].required) {
                    requiredFields.push(key)
                }
            })
            if (requiredFields.length) {
                obj.required = requiredFields
            }
            try {
                const ts = await compile(obj, values.name, compilerOptions)
                tsString.push(ts)
            } catch (e) {
                console.log('ERROR', e)
            }
        }
    }

    async function typeMapper(schema: JSONSchema4 = {}, title: string) {
        const parseObj = {}

        for (const key of Object.keys(schema)) {
            // exclude tab-* elements as they are used in storybloks ui and do not affect the data structure
            if (key.startsWith("tab-")) {
                continue;
            }

            const obj: JSONSchema4 = {}
            const schemaElement = schema[key]
            const type = schemaElement.type

            if (TYPES.includes(type)) {
                const ts = await generate(type, getTitle(type), compilerOptions)

                if (ts) {
                    tsString.push(ts)
                }
            } else if (type === 'custom') {
                Object.assign(parseObj, defaultCustomMapper(key, schemaElement))

                if (typeof customTypeParser === 'function') {
                    Object.assign(parseObj, customTypeParser(key, schemaElement))
                }

                continue;
            }

            const element = parseSchema(schemaElement);

            if (!element) {
                continue;
            }

            obj[key] = element

            if (type === 'multilink') {
                const excludedLinktypes = [];
                const baseType = camelcase(getTitle(type), {
                    pascalCase: true
                })

                if (!schemaElement.email_link_type) {
                    excludedLinktypes.push('{ linktype?: "email" }');
                }
                if (!schemaElement.asset_link_type) {
                    excludedLinktypes.push('{ linktype?: "asset" }');
                }

                obj[key].tsType = excludedLinktypes.length ?
                    `Exclude<${baseType}, ${excludedLinktypes.join(' | ')}>` : baseType
            } else if (TYPES.includes(type)) {
                obj[key].tsType = camelcase(getTitle(type), {
                    pascalCase: true
                })
            } else if (type === 'bloks') {
                if (schemaElement.restrict_components) {
                    if (schemaElement.restrict_type === 'groups') {
                        if (Array.isArray(schemaElement.component_group_whitelist) && schemaElement.component_group_whitelist.length) {
                            let currentGroupElements: string[] = []
                            schemaElement.component_group_whitelist.forEach((groupId: string) => {
                                const currentGroup = groupUuids[groupId]
                                if (Array.isArray(currentGroup)) {
                                    currentGroupElements = [...currentGroupElements, ...currentGroup]
                                } else {
                                    console.log('Group has no members: ', groupId)
                                }
                            })
                            if (currentGroupElements.length == 0) {
                                obj[key].tsType = `never[]`
                            } else {
                                obj[key].tsType = `(${currentGroupElements.join(' | ')})[]`
                            }
                        }
                    } else {
                        if (Array.isArray(schemaElement.component_whitelist) && schemaElement.component_whitelist.length) {
                            obj[key].tsType = `(${schemaElement.component_whitelist.map((i: string) => camelcase(getTitle(i), {
                                pascalCase: true
                            })).join(' | ')})[]`
                        } else {
                            console.log('No whitelisted component found')
                        }
                    }
                } else {
                    console.log('Type: bloks array but not whitelisted (will result in all elements):', title)
                }
            }
            Object.assign(parseObj, obj)
        }

        return parseObj
    }

    function parseSchema(element: StoryblokSchemaElement): {
        type?: string | string[],
        tsType?: string
        [key: string]: any
    } {
        if (TYPES.includes(element.type)) {
            return {
                type: element.type
            }
        }

        let type: string | string[] = "any";
        let options: string[] = [];

        if (Array.isArray(element.options) && element.options.length) {
            options = element.options.map(item => item.value);
        }

        if (options.length && element.exclude_empty_option !== true) {
            options.unshift('')
        }

        // option types with source self do not have a source field but the options as array
        if (!element.source && element.options !== undefined) {
            type = "string"
        }

        // if source to internal stories is not restricted we cannot know about the type contained
        if (element.source === "internal_stories" && element.filter_content_type === undefined) {
            type = "any"
        }

        if (element.source === "internal_stories" && element.filter_content_type) {
            if (element.type === "option") {
                if(Array.isArray(element.filter_content_type)){
                    return {
                        tsType: `(${element.filter_content_type.map((type2) => getStoryTypeTitle(type2)).join(" | ")} | string )`
                    }
                } else {
                    return {
                        tsType: `(${getStoryTypeTitle(element.filter_content_type)} | string )`,
                    }
                }
            }

            if (element.type === "options") {
                if(Array.isArray(element.filter_content_type)){
                    return {
                        tsType: `(${element.filter_content_type.map((type2) => getStoryTypeTitle(type2)).join(" | ")} | string )[]`
                    };
                } else {
                    return {
                        tsType: `(${getStoryTypeTitle(element.filter_content_type)} | string )[]`
                    }
                }
            }

        }

        // datasource and language options are always returned as string
        if (element.source === "internal_languages") {
            type = "string"
        }

        if (element.source === "internal") {
            type = ["number", "string"];
        }

        if (element.source === "external") {
            type = "string";
        }


        if (element.type === "option") {
            if (options.length) {
                return {
                    type,
                    enum: options
                }
            }

            return {
                type
            }
        }

        if (element.type === "options") {
            if (options.length) {
                return {
                    type: "array",
                    items: {
                        enum: options
                    }
                }
            }

            return {
                type: "array",
                items: {type: type}
            }
        }

        switch (element.type) {
            case 'text':
                return {type: 'string'}
            case 'bloks':
                return {type: 'array'}
            case 'number':
                return {type: 'string'}
            case 'image':
                return {type: 'string'}
            case 'boolean':
                return {type: "boolean"}
            case 'textarea':
                return {type: 'string'}
            case 'markdown':
                return {type: 'string'}
            case 'datetime':
                return {type: 'string'}
            default:
                return {type: 'any'}
        }
    }

    await genTsSchema()

    if (path) {
        fs.writeFileSync(path, tsString.join('\n'))
    }


    return tsString
}

export {StoryblokStory}
