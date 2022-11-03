const { compile } = require('json-schema-to-typescript');
const typeFuncs = {
  asset: generateAssetTypeIfNotYetGenerated,
  multiasset: generateMultiAssetTypeIfNotYetGenerated,
  multilink: generateMultiLinkTypeIfNotYetGenerated,
  table: generateTableTypeIfNotYetGenerated,
};
const toGenerateWhitelist = Object.keys(typeFuncs);

async function compileType(obj, name, compilerOptions) {
  const ts = await compile(obj, name, compilerOptions);
  toGenerateWhitelist.splice(toGenerateWhitelist.indexOf(name), 1);
  return ts;
}

async function generate(type, title, compilerOptions) {
  return await typeFuncs[type](title, compilerOptions);
}

async function generateAssetTypeIfNotYetGenerated(title, compilerOptions) {
  if (!toGenerateWhitelist.includes('asset')) return;
  const obj = {};
  obj.$id = '#/' + 'asset';
  obj.title = title;
  obj.type = 'object';
  obj.required = ['id', 'filename', 'name'];
  obj.properties = {
    alt: {
      type: 'string',
    },
    copyright: {
      type: 'string',
    },
    id: {
      type: 'number',
    },
    filename: {
      type: 'string',
    },
    name: {
      type: 'string',
    },
    title: {
      type: 'string',
    },
    focus: {
      type: 'string',
    },
  };
  try {
    return await compileType(obj, 'asset', compilerOptions);
  } catch (e) {
    console.log('ERROR', e);
  }
}

async function generateMultiAssetTypeIfNotYetGenerated(title, compilerOptions) {
  if (!toGenerateWhitelist.includes('multiasset')) return;
  const obj = {};
  obj.$id = '#/' + 'multiasset';
  obj.title = title;
  obj.type = 'array';
  obj.items = {
    type: 'object',
    required: ['id', 'filename', 'name'],
    properties: {
      alt: {
        type: 'string',
      },
      copyright: {
        type: 'string',
      },
      id: {
        type: 'number',
      },
      filename: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      title: {
        type: 'string',
      },
    },
  };
  try {
    return await compileType(obj, 'multiasset', compilerOptions);
  } catch (e) {
    console.log('ERROR', e);
  }
}

async function generateMultiLinkTypeIfNotYetGenerated(title, compilerOptions) {
  if (!toGenerateWhitelist.includes('multilink')) return;
  const obj = {
    oneOf: [
      {
        type: 'object',
        properties: {
          cached_url: {
            type: 'string',
          },
          linktype: {
            type: 'string',
          },
        },
      },
      {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          cached_url: {
            type: 'string',
          },
          linktype: {
            type: 'string',
            enum: ['story'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          url: {
            type: 'string',
          },
          cached_url: {
            type: 'string',
          },
          linktype: {
            type: 'string',
            enum: ['asset', 'url'],
          },
        },
      },
      {
        type: 'object',
        properties: {
          email: {
            type: 'string',
          },
          linktype: {
            type: 'string',
            enum: ['email'],
          },
        },
      },
    ],
  };
  obj.$id = '#/' + 'multilink';
  obj.title = title;
  try {
    return await compileType(obj, 'multilink', compilerOptions);
  } catch (e) {
    console.log('ERROR', e);
  }
}

async function generateTableTypeIfNotYetGenerated(title, compilerOptions) {
  if (!toGenerateWhitelist.includes('table')) return;
  const obj = {};
  obj.$id = '#/' + 'table';
  obj.title = title;
  obj.type = 'object';
  obj.required = ['tbody', 'thead'];
  obj.properties = {
    thead: {
      type: 'array',
      items: {
        type: 'object',
        required: ['_uid', 'component'],
        properties: {
          _uid: {
            type: 'string',
          },
          value: {
            type: 'string',
          },
          component: {
            type: 'number',
          },
        },
      },
    },
    tbody: {
      type: 'array',
      items: {
        type: 'object',
        required: ['_uid', 'component', 'body'],
        properties: {
          _uid: {
            type: 'string',
          },
          body: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _uid: {
                  type: 'string',
                },
                value: {
                  type: 'string',
                },
                component: {
                  type: 'number',
                },
              },
            },
          },
          component: {
            type: 'number',
          },
        },
      },
    },
  };
  try {
    return await compileType(obj, 'table', compilerOptions);
  } catch (e) {
    console.log('ERROR', e);
  }
}

module.exports = {
  TYPES: Object.keys(typeFuncs),
  generate,
};
