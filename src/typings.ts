import {Options} from "json-schema-to-typescript";
import {JSONSchema4} from "json-schema";

export type PrimitiveType = "boolean" | "string" | "number" | "array" | "any"

export type GenericType =
    'text'
    | 'bloks'
    | 'array'
    | 'option'
    | 'options'
    | 'number'
    | 'image'
    | 'boolean'
    | 'textarea'
    | 'markdown'
    | 'richtext'
    | 'datetime'
    | 'asset' | 'multiasset' | 'multilink' | 'table'

export type BasicType = 'asset' | 'multiasset' | 'multilink' | 'table'


export type CompilerOptions = Partial<Options>;

export interface StoryblokTsOptions {
    componentsJson: {
        components: JSONSchema4[]
    },
    customTypeParser?: (key: string, options: JSONSchema4) => void
    compilerOptions?: CompilerOptions
    path?: string
    titleSuffix?: string
    titlePrefix?: string
}

export interface CliOptions {
    source: string
    target?: string
    titleSuffix?: string
    titlePrefix?: string
    customTypeParser?: string
    compilerOptions?: CompilerOptions
}

export interface StoryblokSchemaElementOption {
    _uid: string
    name: string
    value: string
}

export interface StoryblokSchemaElement {
    type: GenericType
    pos: number
    key: string
    use_uuid?: boolean
    source?: "internal" | "external" | "internal_stories" | "internal_languages"
    options?: StoryblokSchemaElementOption[],
    filter_content_type?: string[]
    restrict_components?: boolean
    component_whitelist?: string[]
    component_group_whitelist?: string[]
    restrict_type?: "groups" | ""
    exclude_empty_option?: boolean
}