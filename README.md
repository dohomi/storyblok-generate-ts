# storyblok-generate-ts
This plugin uses `json-schema-to-typescript` to generate TS types based on `Storyblok` components.

### 1. Prepare the use of this script
#### a) Fetch your schema with Storyblok CLI
```
# Make sure storyblok is installed (npm i storyblok -g)
$ storyblok pull-components --space=xxx
```

#### b) Install this library as devDependency
```
$ npm install -D storyblok-generate-ts
```

### 2. Create a NodeJS javascript file

#### Example:
```js
const storyblokToTypescript = require('storyblok-generate-ts')

storyblokToTypescript({
  // required
  componentsJson: require('./components.xxx.json'), // pull components with storyblok
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

#### 3. Run your script
```
$ node ./YOUR_SCRIPT_NAME.js
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

#### Inspect your generated file
You can inspect all interfaces in the generated output of your file. From now on all your components blocks will be type safe (even if you use the custom blocks of Storyblok).
