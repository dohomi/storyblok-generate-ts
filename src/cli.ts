#!/usr/bin/env node
import storyblokToTypescript from './index'
import {resolve} from 'path'
import {CliOptions, StoryblokTsOptions} from "./typings";

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

const options: StoryblokTsOptions = {
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
