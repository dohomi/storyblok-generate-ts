const {compile} = require('json-schema-to-typescript')
const fs = require('fs')
// const ComponentsJson = require('./components.82895')
// const {customTypeParser} = require('./generate-ts-schema-custom-types')

module.exports = function storyblokToTypescript ({
  componentsJson = {components: []},
  customTypeParser = () => {
  },
  path = 'src/typings/generated/components-schema.ts',
  titleSuffix = '_storyblok',
  titlePrefix = ''
}) {
  let tsString = []

  async function genTsSchema () {
    for (const values of componentsJson.components) {
      const obj = {}
      obj.$id = '/' + values.name
      obj.title = titlePrefix + values.name + titleSuffix
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
        console.log(e)
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
        Object.assign(parseObj, customTypeParser(key, schemaElement))
        return
      } else if (type === 'multilink') {
        Object.assign(parseObj, {
          [key]: {
            type: 'object',
            properties: {
              cached_url: {
                type: 'string'
              },
              linktype: {
                type: 'string'
              }
            }
          }
        })
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
      if (type === 'bloks' && schemaElement.restrict_components && schemaElement.component_whitelist && schemaElement.component_whitelist.length) {
        // console.log(obj[key], schemaElement, title)
        // obj[key].anyOf = schemaElement.component_whitelist.map(item => {
        //   return {'$ref': '/' + item}
        // })
        // obj[key].items = [
        //   {
        //     enum: schemaElement.component_whitelist.map((_item, i) => {
        //       return i
        //     }),
        //     title: title,
        //     tsEnumNames: schemaElement.component_whitelist.map(item => {
        //       return item
        //     })
        //   }
        // ]
        // obj[key].items.enum = schemaElement.component_whitelist.map(item => {
        //   return item
        // })
        // obj[key].items.tsEnumNames = schemaElement.component_whitelist.map(item => {
        //   return item
        // })
        // obj.additionalItems = true
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
      default:
        return null
    }
  }


  genTsSchema()
    .then(() => {
      fs.writeFileSync(path, tsString.join('\n'))
    })
}
