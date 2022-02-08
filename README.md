# storyblok-generate-ts
This plugin uses `json-schema-to-typescript` to generate TS types based on `Storyblok` components. 
You can install and run it as a CLI script

### 1. Prepare the use of this script
#### a) Fetch your schema with Storyblok CLI
```
# Make sure storyblok is installed (npm i storyblok -g)
$ storyblok pull-components --space=[SPACE_ID]
```

#### b) Install this library as devDependency
```
$ npm install -D storyblok-generate-ts
```

#### c) Create node script inside of your package.json scripts 
```
"generate-sb-types": "storyblok-generate-ts source=./components.[SPACE_ID].json target=./component-types-sb"
```
#### Properties of CLI
```
- source *required - path of the components.[SPACE_ID].json
- target *optional default: storyblok-component-types.d.ts
- titlePrefix *optional default: '_storyblok' 
- titleSuffix *optional
- customTypeParser *optional - path to a custom parser NodeJS file
```

### Alternative to CLI script: create a NodeJS javascript file

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

#### Resolve relations
If you use `resolve_relations` you can simply extend your required schema to support fully typed relations.

Example: `resolve_relations: "page.author,page.categories,page.tags"`
```ts
type PageWithRelations = PageStoryblok & {
  author?: StoryData<AuthorStoryblok>
  categories?: StoryData<CategoryStoryblok>[]
  tags?: StoryData<TagStoryblok>[]
}
``` 

### CHANGELOG

* 1.0.0 initial version
* 1.0.1 Added support for datetime and improved multilink
* 1.1.0 CLI support, for use check 1 c)
* 1.1.1 README update
* 1.2.0 Add types for multiasset
* 1.2.1 Improve type for asset and multiasset
* 1.3.0 Default custom map. Support `seo-metatags`
* 1.4.0 Add empty string options
