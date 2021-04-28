const {compile} = require('json-schema-to-typescript')
const fs = require('fs')
const camelcase = require('camelcase')
const defaultCustomMapper = require('./defaultCustomMapper')

module.exports = function storyblokToTypescript ({
  componentsJson = {components: []},
  customTypeParser = () => {
  },
  path = 'src/typings/generated/components-schema.ts',
  titleSuffix = '_storyblok',
  titlePrefix = ''
}) {
  let tsString = []

  const getTitle = (t) => titlePrefix + t + titleSuffix

  const groupUuids = {}

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

  async function genTsSchema () {
    for (const values of componentsJson.components) {
      const obj = {}
      obj.$id = '#/' + values.name
      // obj.$ref = '/' + values.name
      obj.title = getTitle(values.name)
      obj.type = 'object'
      obj.properties = typeMapper(values.schema, obj.title)
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
        const ts = await compile(obj, values.name, {
          unknownAny: false,
          bannerComment: '',
          unreachableDefinitions: true
        })
        tsString.push(ts)
      } catch (e) {
        console.log('ERROR', e)
      }
    }
  }

  function typeMapper (schema = {}, title) {
    const parseObj = {}
    Object.keys(schema).forEach((key) => {
      const obj = {}
      const schemaElement = schema[key]
      const type = schemaElement.type
      if (type === 'custom') {
        Object.assign(parseObj, defaultCustomMapper(key, schemaElement))
        Object.assign(parseObj, customTypeParser(key, schemaElement))
        return
      } else if (type === 'multilink') {
        Object.assign(parseObj, {
          [key]: {
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
        })
      } else if (type === 'asset') {
        Object.assign(parseObj, {
          [key]: {
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
            },
            additionalProperties: false
          }
        })
      } else if (type === 'multiasset') {
        Object.assign(parseObj, {
            [key]: {
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
                },
                additionalProperties: false
              }
            }
          }
        )
      }
      const schemaType = parseType(type)
      if (!schemaType) {
        return
      }

      obj[key] = {
        type: schemaType
      }
      if (schemaElement.options && schemaElement.options.length) {
        const items = schemaElement.options.map(item => item.value)
        if (schemaType === 'string') {
          obj[key].enum = items
        } else {
          obj[key].items = {
            enum: items
          }
        }
      }
      if (type === 'bloks') {
        if (schemaElement.restrict_components) {
          if (schemaElement.restrict_type === 'groups') {
            if (Array.isArray(schemaElement.component_group_whitelist) && schemaElement.component_group_whitelist.length) {
              let currentGroupElements = []
              schemaElement.component_group_whitelist.forEach(groupId => {
                const currentGroup = groupUuids[groupId]
                if (Array.isArray(currentGroup)) {
                  currentGroupElements = [...currentGroupElements, ...currentGroup]
                } else {
                  console.log('Group has no members: ', groupId)
                }
              })
              obj[key].tsType = `(${currentGroupElements.join(' | ')})[]`
            }
          } else {
            if (Array.isArray(schemaElement.component_whitelist) && schemaElement.component_whitelist.length) {
              obj[key].tsType = `(${schemaElement.component_whitelist.map(i => camelcase(getTitle(i), {
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
    })

    return parseObj
  }

  function parseType (type) {
    switch (type) {
      case 'text':
        return 'string'
      case 'bloks':
        return 'array'
      case 'option':
        return 'string'
      case 'options':
        return 'array'
      case 'number':
        return 'number'
      case 'image':
        return 'string'
      case 'boolean':
        return 'boolean'
      case 'textarea':
        return 'string'
      case 'markdown':
        return 'string'
      case 'richtext':
        return 'any'
      case 'datetime':
        return 'string'
      default:
        return null
    }
  }


  genTsSchema()
    .then(() => {
      fs.writeFileSync(path, tsString.join('\n'))
    })
}
