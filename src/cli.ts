#!/usr/bin/env node
import storyblokToTypescript from './index'
import {resolve} from 'path'
import {CliOptions, StoryblokTsOptions} from "./typings";
import * as fs from 'fs';
import {JSONSchema4} from "json-schema";

const [, , ...args] = process.argv

const parseValue = (value: string) => {
    if (value.match(/^(true|false)$/)) {
        return value === 'true'
    }
    if (value.match(/^[\d.]+$/)) {
        return Number(value)
    }
    return value
}

const getDataFromPath = async (path: string) => {
    if (!path) {
      return {}
    }
    const sources = path.split(',')
    const isList = sources.length > 1
  
    try {
        if (!isList) return JSON.parse(fs.readFileSync(sources[0], 'utf8'))
  
        const data: JSONSchema4[] = []
        sources.forEach((source) => {
          data.push(JSON.parse(fs.readFileSync(source, 'utf8')))
        })
        return data
      
    } catch (err) {
      console.error(`Can not load json file from ${path}`)
      return Promise.reject(err)
    }
  }

/**
 * Creat an array based in the content parameter and the key provided
 * @param {object} content the data to create a list
 * @param {string} key key to serch in the content
 * @returns {Array} return the data from the source or an error
 */
const createContentList = (content: Record<string, any>, key: string) => {
    if (content[key]) return content[key]
    else if (Array.isArray(content)) return [...content]
    else return [content]
  }

const props: Partial<CliOptions> = {}
args.forEach((key: string) => {
    const [name, value] = key.split('=').map(i => i.trim())
    if (name.match(/\w+\.\w+/)) {
        const [objectName, objectProperty] = name.split('.');
        // @ts-ignore
        props[objectName] = props[objectName] || {};
        // @ts-ignore
        props[objectName][objectProperty] = parseValue(value);
    } else {
        // @ts-ignore
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

getDataFromPath(props.source).then((rawComponents) => {
    
    const components = createContentList(rawComponents, 'components')

    const options: StoryblokTsOptions = {
        components,
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
    
}).catch(e => {
    console.log('Something went wrong while generating your types:')
    console.log(e);
})

