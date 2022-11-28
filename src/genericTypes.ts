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
                    cached_url: {
                        type: 'string'
                    },
                    linktype: {
                        type: 'string'
                    }
                }
            },
            {
                type: 'object',
                properties: {
                    id: {
                        type: 'string'
                    },
                    cached_url: {
                        type: 'string'
                    },
                    anchor:{
                        type: 'string'
                    },
                    linktype: {
                        type: 'string',
                        enum: ['story']
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
                    anchor:{
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



