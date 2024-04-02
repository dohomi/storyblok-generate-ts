import { JSONSchema4 } from 'json-schema';
import { compile } from 'json-schema-to-typescript';

import { BasicType, CompilerOptions, StoryblokResolveOptions } from './typings';

const typeFuncs: {
    [k in BasicType]: (name: string, options: CompilerOptions, storyblokResolve: StoryblokResolveOptions) => Promise<string | undefined>
} = {
    'asset': generateAssetTypeIfNotYetGenerated,
    'multiasset': generateMultiAssetTypeIfNotYetGenerated,
    'multilink': generateMultiLinkTypeIfNotYetGenerated,
    'table': generateTableTypeIfNotYetGenerated,
    'richtext': generateRichtextTypeIfNotYetGenerated,
}
const toGenerateWhitelist = Object.keys(typeFuncs)


async function compileType(obj: JSONSchema4, name: BasicType, compilerOptions: CompilerOptions) {
    const ts = await compile(obj, name, compilerOptions);
    toGenerateWhitelist.splice(toGenerateWhitelist.indexOf(name), 1)
    return ts
}

export async function generate(type: BasicType, title: string, compilerOptions: CompilerOptions, storyblokResolve: StoryblokResolveOptions) {
    return await typeFuncs[type](title, compilerOptions, storyblokResolve)
}

export const TYPES = Object.keys(typeFuncs)

async function generateAssetTypeIfNotYetGenerated(title: string, compilerOptions: CompilerOptions) {
    if (!toGenerateWhitelist.includes("asset")) return;
    const obj: JSONSchema4 = {
        '$id': '#/asset',
        title: title,
        type: 'object',
        required: ['id', 'filename', 'name'],
        properties: {
            _uid: {
                type: 'string'
            },
            id: {
                type: 'number'
            },
            alt: {
                type: 'string'
            },
            name: {
                type: 'string'
            },
            focus: {
                type: 'string'
            },
            source: {
                type: 'string'
            },
            title: {
                type: 'string'
            },
            filename: {
                type: 'string'
            },
            copyright: {
                type: 'string'
            },
            fieldtype: {
                type: 'string'
            },
            meta_data: {
                type: ["null", "object"]
            },
            is_external_url: {
                type: 'boolean'
            },
        }
    }
    try {
        return await compileType(obj, "asset", compilerOptions)
    } catch (e) {
        console.log('ERROR', e)
    }
}

async function generateRichtextTypeIfNotYetGenerated(title: string, compilerOptions: CompilerOptions) {
    if (!toGenerateWhitelist.includes("richtext")) return;
    const obj: JSONSchema4 = {
        '$id': '#/richtext',
        title: title,
        type: 'object',
        required: ['type'],
        properties: {
            type: {
                type: 'string'
            },
            content: {
                type: 'array',
                items: {
                    '$ref': '#'
                }
            },
            marks: {
                type: 'array',
                items: {
                    '$ref': '#'
                }
            },
            attrs: {},
            text: {
                type: 'string'
            }
        }
    }
    try {
        return await compileType(obj, "richtext", compilerOptions)
    } catch (e) {
        console.log('ERROR', e)
    }
}

async function generateMultiAssetTypeIfNotYetGenerated(title: string, compilerOptions: CompilerOptions) {
    if (!toGenerateWhitelist.includes("multiasset")) return;
    const obj: JSONSchema4 = {
        '$id': '#/multiasset',
        title: title,
        type: 'array',
        items: {
            type: 'object',
            required: ['id', 'filename', 'name'],
            properties: {
                alt: {
                    type: 'string'
                },
                copyright: {
                    type: 'string'
                },
                id: {
                    type: 'number'
                },
                filename: {
                    type: 'string'
                },
                name: {
                    type: 'string'
                },
                title: {
                    type: 'string'
                }
            }
        }
    }
    try {
        return await compileType(obj, "multiasset", compilerOptions)
    } catch (e) {
        console.log('ERROR', e)
    }
}

function getStoryLinkTypeByResolveLink(resolveLinkOption?: "url" | "link" | "story"): JSONSchema4 {
    switch (resolveLinkOption) {
        case "url":
            return {
                type: 'object',
                required: ['name', 'id', 'uuid', 'slug', 'url', 'full_slug'],
                properties: {
                    name: {
                        type: "string"
                    },
                    id: {
                        type: "integer"
                    },
                    uuid: {
                        type: "string",
                        format: "uuid"
                    },
                    slug: {
                        type: "string"
                    },
                    url: {
                        type: "string"
                    },
                    full_slug: {
                        type: "string"
                    }
                }
            }
        case "link":
            return {
                type: 'object',
                required: ['name', 'id', 'uuid', 'slug'],
                properties: {
                    name: {
                        type: "string"
                    },
                    id: {
                        type: "integer"
                    },
                    uuid: {
                        type: "string",
                        format: "uuid"
                    },
                    slug: {
                        type: "string"
                    },
                    position: {
                        type: "integer"
                    },
                    is_folder: {
                        type: "boolean"
                    },
                    is_startpage: {
                        type: "boolean"
                    },
                    parent_id: {
                        type: ["null", "integer"]
                    },
                    published: {
                        type: "boolean"
                    },
                    path: {
                        type: ["null", "string"]
                    },
                    real_path: {
                        type: ["null", "string"]
                    },
                }
            }
        default:
            return {
                type: 'object',
                required: ['name', 'id', 'uuid', 'slug', 'url', 'full_slug'],
                properties: {
                    name: {
                        type: "string"
                    },
                    created_at: {
                        type: "string",
                        format: "date-time"
                    },
                    published_at: {
                        type: "string",
                        format: "date-time"
                    },
                    id: {
                        type: "integer"
                    },
                    uuid: {
                        type: "string",
                        format: "uuid"
                    },
                    content: {
                        type: "object"
                    },
                    slug: {
                        type: "string"
                    },
                    full_slug: {
                        type: "string"
                    },
                    sort_by_date: {
                        type: ["null", "string"],
                        format: "date-time"
                    },
                    position: {
                        type: "integer"
                    },
                    tag_list: {
                        type: "array",
                        items: {
                            type: "string"
                        }
                    },
                    is_startpage: {
                        type: "boolean"
                    },
                    parent_id: {
                        type: ["null", "integer"]
                    },
                    meta_data: {
                        type: ["null", "object"]
                    },
                    group_id: {
                        type: "string",
                        format: "uuid"
                    },
                    first_published_at: {
                        type: "string",
                        format: "date-time"
                    },
                    release_id: {
                        type: ["null", "integer"]
                    },
                    lang: {
                        type: "string"
                    },
                    path: {
                        type: ["null", "string"]
                    },
                    alternates: {
                        type: "array"
                    },
                    default_full_slug: {
                        type: ["null", "string"]
                    },
                    translated_slugs: {
                        type: ["null", "array"]
                    }
                }
            }
    }
}

async function generateMultiLinkTypeIfNotYetGenerated(title: string, compilerOptions: CompilerOptions, storyblokResolve: StoryblokResolveOptions) {
    if (!toGenerateWhitelist.includes("multilink")) return;
    const obj: JSONSchema4 = {
        $id: '#/multilink',
        title: title,
        'oneOf': [
            {
                type: 'object',
                properties: {
                    id: {
                        type: 'string'
                    },
                    cached_url: {
                        type: 'string'
                    },
                    anchor: {
                        type: 'string'
                    },
                    linktype: {
                        type: 'string',
                        enum: ['story']
                    },
                    target: {
                        type: 'string',
                        enum: ['_self', '_blank'],
                    },
                    story: getStoryLinkTypeByResolveLink(storyblokResolve.resolveLinks)
                }
            },
            {
                type: 'object',
                properties: {
                    url: {
                        type: 'string'
                    },
                    cached_url: {
                        type: 'string'
                    },
                    anchor: {
                        type: 'string'
                    },
                    linktype: {
                        type: 'string',
                        enum: ['asset', 'url']
                    },
                    target: {
                        type: 'string',
                        enum: ['_self', '_blank'],
                    },
                }
            },
            {
                type: 'object',
                properties: {
                    email: {
                        type: 'string'
                    },
                    linktype: {
                        type: 'string',
                        enum: ['email']
                    },
                    target: {
                        type: 'string',
                        enum: ['_self', '_blank'],
                    },
                }
            }
        ]
    }

    try {
        return await compileType(obj, "multilink", compilerOptions)
    } catch (e) {
        console.log('ERROR', e)
    }
}

async function generateTableTypeIfNotYetGenerated(title: string, compilerOptions: CompilerOptions) {
    if (!toGenerateWhitelist.includes("table")) return;
    const obj: JSONSchema4 = {
        $id: '#/' + 'table',
        title: title,
        type: 'object',
        required: ['tbody', 'thead'],
        properties: {
            thead: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['_uid', 'component'],
                    properties: {
                        _uid: {
                            type: 'string'
                        },
                        value: {
                            type: 'string'
                        },
                        component: {
                            type: 'number'
                        }
                    }
                }
            },
            tbody: {
                type: 'array',
                items: {
                    type: 'object',
                    required: ['_uid', 'component', 'body'],
                    properties: {
                        _uid: {
                            type: 'string'
                        },
                        body: {
                            type: 'array',
                            items: {
                                type: 'object',
                                properties: {
                                    _uid: {
                                        type: 'string'
                                    },
                                    value: {
                                        type: 'string'
                                    },
                                    component: {
                                        type: 'number'
                                    }
                                }
                            }
                        },
                        component: {
                            type: 'number'
                        }
                    }
                }
            }
        }
    }

    try {
        return await compileType(obj, "table", compilerOptions)
    } catch (e) {
        console.log('ERROR', e)
    }
}



