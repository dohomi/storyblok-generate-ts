import {JSONSchema4} from "json-schema";

export default function defaultCustomMapper (key: string, obj: JSONSchema4) {
  switch (obj.field_type) {
    case 'meta-fields':
      return {
        [key]: {
          type: 'object',
          properties: {
            _uid: {
              type: 'string'
            },
            title: {
              type: 'string'
            },
            plugin: {
              type: 'string'
            },
            description: {
              type: 'string'
            }
          }
        }
      }
    case 'seo-metatags':
      return {
        [key]: {
          type: 'object',
          properties: {
            _uid: {
              type: 'string'
            },
            title: {
              type: 'string'
            },
            plugin: {
              type: 'string'
            },
            og_image: {
              type: 'string'
            },
            og_title: {
              type: 'string'
            },
            description: {
              type: 'string'
            },
            twitter_image: {
              type: 'string'
            },
            twitter_title: {
              type: 'string'
            },
            og_description: {
              type: 'string'
            },
            twitter_description: {
              type: 'string'
            }
          }
        }
      }
    default:
      return {}
  }
}
