#!/usr/bin/env node
const storyblokToTypescript = require('./index')
const {resolve} = require('path')
const [, , ...args] = process.argv

const parseValue = (value) => {
  if (value.match(/^(true|false)$/)) {
      return value === 'true'
  }
  if (value.match(/^[\d.]+$/)) {
    return Number(value)
  }
  return value
}

const props = {}
args.forEach(key => {
  const [name, value] = key.split('=').map(i => i.trim())
  if (name.match(/\w+\.\w+/)) {
    const [objectName, objectProperty] = name.split('.');
    props[objectName] = props[objectName] || {};
    props[objectName][objectProperty] = parseValue(value);
  } else {
    props[name] = parseValue(value)
  }
})
if (!props.source) {
  console.log('there is no source path to components file')
  process.exit()
}

if (props.target && !props.target.endsWith('.ts')) {
  props.target += '.d.ts'
}

const options = {
  componentsJson: require(resolve(props.source)),
  compilerOptions: props.compilerOptions || {},
  path: resolve(props.target || './storyblok-component-types.d.ts')
}

if (props.titlePrefix) {
  options.titlePrefix = props.titlePrefix
}

if (props.titleSuffix) {
  options.titleSuffix = props.titleSuffix
}

if (props.customTypeParser) {
  options.customTypeParser = require(resolve(props.customTypeParser))
}

storyblokToTypescript(options)
