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

export interface StoryblokSchemaElementOption {
    _uid: string
    name: string
    value: string
}

export interface StoryblokSchemaElement {
    type: GenericType
    pos: number
    key: string
    use_uuid?: boolean
    source?: "internal" | "external" | "internal_stories" | "internal_languages"
    options?: StoryblokSchemaElementOption[],
    filter_content_type?: string[]
    restrict_components?: boolean
    component_whitelist?: string[]
    component_group_whitelist?: string[]
    restrict_type?: "groups" | ""
    exclude_empty_option?: boolean
}

export interface StoryblokStory<TContent> {
    name: string
    created_at: string
    published_at: string
    id: number
    uuid: string
    content: TContent;
    slug: string
    full_slug: string
    sort_by_date: string | null;
    position: number
    tag_list: string[]
    is_startpage: boolean;
    parent_id: string
    meta_data: any;
    group_id: string
    first_published_at: string | null;
    release_id?: number | null;
    lang: string;
    path: string | null
    alternates: {
        id: number;
        name: string;
        slug: string;
        published: boolean;
        full_slug: string;
        is_folder: boolean;
        parent_id: number;
    }[]
    default_full_slug: string
    translated_slugs: {
        path: string;
        name: string | null;
        lang: string
    }[]
    _stopResolving?: boolean;
}