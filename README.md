# storyblok-generate-ts
Generates TypeScript types based on components json file

### How to use it:
```js
const storyblokToTypescript = require('storyblok-generate-ts')

storyblokToTypescript({
  // required
  componentsJson: require('./components.88723.json'), // pull components with storyblok
  // required
  path: __dirname + '/src/typings/generated/components-schema.ts', // make sure path exists
  // optional type prefix (default: none)
  titlePrefix: '',
  // optional type name suffix (default: [Name]_Storyblok)
  titleSuffix: '_storyblok',
  // optional function for custom types (key, obj) => {}
  // customTypeParser: exampleCustomParser
})
```

#### Example Custom Parser
```js
function exampleCustomParser (key, obj) {
  switch (obj.field_type) {
    case 'bootstrap-utility-class-selector':
      return {
        [key]: {
          type: 'object',
          properties: {
            values: {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          }
        }
      }
    case 'vue-color-picker':
      return {
        [key]: {
          type: 'object',
          properties: {
            rgba: {
              type: 'string'
            }
          }
        }
      }
    default:
      return {}
  }
}
```
