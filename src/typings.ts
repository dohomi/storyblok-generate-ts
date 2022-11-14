import {Options} from "json-schema-to-typescript";

export type GenericType = 'asset' | 'multiasset' | 'multilink' | 'table'
export type CompilerOptions = Partial<Options>;