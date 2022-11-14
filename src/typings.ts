import {Options} from "json-schema-to-typescript";
import {JSONSchema4} from "json-schema";

export type GenericType =
    'text'
    | 'bloks'
    | 'array'
    | 'option'
    | 'options'
    | 'number'
    | 'image'
    | 'boolean'
    | 'textarea'
    | 'markdown'
    | 'richtext'
    | 'datetime'
    | 'asset' | 'multiasset' | 'multilink' | 'table'

export type BasicType = 'asset' | 'multiasset' | 'multilink' | 'table'


export type CompilerOptions = Partial<Options>;

export interface StoryblokTsOptions {
    componentsJson: {
        components: JSONSchema4[]
    },
    customTypeParser?: (key: string, options: JSONSchema4) => void
    compilerOptions?: CompilerOptions
    path?: string
    titleSuffix?: string
    titlePrefix?: string
}

export interface CliOptions {
    source: string
    target?: string
    titleSuffix?: string
    titlePrefix?: string
    customTypeParser?: string
    compilerOptions?: CompilerOptions
}