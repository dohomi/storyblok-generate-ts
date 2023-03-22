import {compile} from "json-schema-to-typescript"
import {JSONSchema4} from "json-schema";
import {BasicType, CompilerOptions} from "./typings";


const typeFuncs: {
    [k in BasicType]: (name: string, options: CompilerOptions) => Promise<string | undefined>
} = {
    'asset': generateAssetTypeIfNotYetGenerated,
    'multiasset': generateMultiAssetTypeIfNotYetGenerated,
    'multilink': generateMultiLinkTypeIfNotYetGenerated,
    'table': generateTableTypeIfNotYetGenerated,
}
const toGenerateWhitelist = Object.keys(typeFuncs)


async function compileType(obj: JSONSchema4, name: BasicType, compilerOptions: CompilerOptions) {
    const ts = await compile(obj, name, compilerOptions);
    toGenerateWhitelist.splice(toGenerateWhitelist.indexOf(name), 1)
    return ts
}

export async function generate(type: BasicType, title: string, compilerOptions: CompilerOptions) {
    return await typeFuncs[type](title, compilerOptions)
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
            },
            focus: {
                type: 'string'
            }
        }
    }
    try {
        return await compileType(obj, "asset", compilerOptions)
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

async function generateMultiLinkTypeIfNotYetGenerated(title: string, compilerOptions: CompilerOptions) {
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
                    story: {
                        type: 'object',
                        required: ['name', 'id', 'uuid', 'slug', 'full_slug'],
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
                    }
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
                    }
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



