# Important announcement
The dev team of Storyblok have seen the importance to have a working CLI as part of their infrastructure. So please check out following resources:

* https://github.com/storyblok/storyblok-cli?tab=readme-ov-file#generate-typescript-typedefs
* https://www.storyblok.com/faq/how-can-i-utilize-typescript-in-my-storyblok-project
* https://dev.to/storyblok/generate-types-for-your-components-with-the-storyblok-cli-14b7 

On newer projects its probably better on the long run using the official CLI.

# storyblok-generate-ts
This plugin uses [json-schema-to-typescript](https://github.com/bcherny/json-schema-to-typescript) to generate TS types based on `Storyblok` components. 
You can install and run it as a CLI script

### 1. Prepare the use of this script
#### a) Fetch your schema with Storyblok CLI
```
# Make sure storyblok is installed (npm i storyblok -g)
$ storyblok pull-components --space=[SPACE_ID]
```
Example:
```sh
$ storyblok pull-components --space=123456
```

#### b) Install this library as devDependency
```
$ npm install -D storyblok-generate-ts
```

#### c) Create node script inside of your package.json scripts 
```
"generate-sb-types": "storyblok-generate-ts source=./components.[SPACE_ID].json target=./component-types-sb"
```
Example:
```
"generate-sb-types": "storyblok-generate-ts source=./components.123456.json target=./component-types-sb"
```

You can also provide multiple files as source in case you used the `--separate-files` flag with the `pull-components` command:

```
"generate-sb-types": "storyblok-generate-ts source=string hero-[SPACE_ID].json,footer-[SPACE_ID].json target=./component-types-sb"
```
Example:
```
"generate-sb-types": "storyblok-generate-ts source=string hero-123456.json,footer-123456.json target=./component-types-sb"
```

#### Properties of CLI
```
- source *required - path of the components.[SPACE_ID].json or multiple files as comma-separated string hero-[SPACE_ID].json,footer-[SPACE_ID].json
- target *optional default: storyblok-component-types.d.ts
- titlePrefix *optional default: '_storyblok' 
- titleSuffix *optional
- resolveLinks *optional 
- compilerOptions.[property] *optional
- customTypeParser *optional - path to a custom parser NodeJS file
```
#### Compiler options:
| property | type | default | description |
|-|-|-|-|
| unknownAny | boolean | `false` | Type `any` will be replaced with `unknown` where possible if `true` |
| bannerComment | string | '' | Disclaimer comment prepended to the top of each generated file |
| unreachableDefinitions | boolean | `true` | Generates code for `$defs` that aren't referenced by the schema. |
| additionalProperties | boolean | `true` | Adding `[k: string]: any` (`[k: string]: unknown` if `unknownAny:true`) to all object types (to nested ones too) when set to `true` |
| enableConstEnums | boolean | `true` | Prepend enums with [`const`](https://www.typescriptlang.org/docs/handbook/enums.html#computed-and-constant-members)? |
| format | boolean | `true` | Format code? Set this to `false` to improve performance. |
| ignoreMinAndMaxItems | boolean | `false` | Ignore maxItems and minItems for `array` types, preventing tuples being generated. |
| maxItems | number | `20` | Maximum number of unioned tuples to emit when representing bounded-size array types, before falling back to emitting unbounded arrays. Increase this to improve precision of emitted types, decrease it to improve performance, or set it to `-1` to ignore `maxItems`.
| strictIndexSignatures | boolean | `false` | Append all index signatures with `\| undefined` so that they are strictly typed. |
| style | object | `{ bracketSpacing: false,  printWidth: 120,  semi: true,  singleQuote: false,  tabWidth: 2,  trailingComma: 'none',  useTabs: false }` | A [Prettier](https://prettier.io/docs/en/options.html) configuration |
| cwd | string | `process.cwd()` | Root directory for resolving [`$ref`](https://tools.ietf.org/id/draft-pbryan-zyp-json-ref-03.html)s |
| declareExternallyReferenced | boolean | `true` | Declare external schemas referenced via `$ref`? |
| $refOptions | object | `{}` | [$RefParser](https://github.com/BigstickCarpet/json-schema-ref-parser) Options, used when resolving `$ref`s |

### Alternative to CLI script: create a NodeJS javascript file

#### Example:

```js
const storyblokToTypescript = require('src/index')

storyblokToTypescript({
    // required
    componentsJson: require('./components.xxxxxx.json'), // pull components with storyblok
    // required
    path: __dirname + '/src/typings/generated/components-schema.ts', // make sure path exists
    // optional type prefix (default: none)
    titlePrefix: '',
    // optional type name suffix (default: [Name]_Storyblok)
    titleSuffix: '_storyblok',
    // optional resolveLinks (default: story)
    resolveLinks: "url",
    // optional compilerOptions which get passed through to json-schema-to-typescript
    compilerOptions: {
        unknownAny: false,
        bannerComment: '',
        unreachableDefinitions: true
    }
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

#### Generic Types
Following types are available for convenient reasons (if they are used in your component schema):
```ts
AssetStoryblok
MultiassetStoryblok
MultilinkStoryblok
TableStoryblok
```

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
* 1.4.0 Allow empty string in options type (thanks to @jbeast)
* 1.5.0 De-Duplicate asset, multiasset and multilink (thanks to @markus-gx)
* 1.6.0 Add table schema (thanks to @markus-gx)
* 1.6.1 Add asset focus type (thanks to @markus-gx)
* 1.7.0 Add compilerOptions option (thanks to @SassNinja)
* 1.8.0 Use never[] on groups that have no members (thanks to @arduano)
* 1.9.0 Convert all files to TypeScript and add TypeScript declaration 
* 1.10.0 Resolve typings of internal stories (thanks to @schaschjan) 
* 1.10.2 Minor type adjustment for internal stories
* 1.11.0 Improve Payload of main script (thanks to @scmx)
* 1.12.0 Fixes an error when filter_content_type is not an array (thanks to @juanpasolano)
* 1.13.0 Merged multilink story fieldtype and single options (credits to @juanpasolano and @markus-gx)
* 1.13.1 Added tests and fix minor typing error (credits to @juanpasolano)
* 1.13.2 Fixed types
* 1.14.0 Enable multi-file support and add RichText typings (thanks to @VictorWinberg & @mattcrn)
* 1.15.0 Change Storyblok number type to "string" as the API does not return a number type (thanks to @davidhoeck)
* 2.0.0 Change of use of camelcase: now every title is used with camelcase which potentially breaks existing type names but fixes inconsistency 
