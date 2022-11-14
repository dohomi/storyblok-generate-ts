const storyblokToTypescript = require('storyblok-generate-ts')
storyblokToTypescript({
  // required
  componentsJson: require('./components.82895.json'), // pull components with storyblok
  // required
  path: __dirname + '/component-types-sb.ts', // make sure path exists
  // optional type prefix (default: none)
  titlePrefix: '',
  // optional type name suffix (default: [Name]_Storyblok)
  titleSuffix: '_storyblok',
  // optional function for custom types (key, obj) => {}
  // customTypeParser: customParser
})
