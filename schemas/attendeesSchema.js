// export default {
//   "property": "attendees",
//   "type": "array",
//   "items": {
//     "type": "object",
//     "properties": {
//       "id" : {"type": "integer"},
//       "title" : {"type": "string"},
//       "firstName" : {"type": "string"},
//       "lastName" : {"type": "string"},
//       "bio" : {"type": "string"},
//       "presenter" : {"type": "boolean"}
//     },
//     "required": ["id", "firstName", "lastName"]
//   }
// }

// export default {
//   "properties": {
//     "attendees": {
//       "type": "array",
//       "items": {
//         "type": "object",
//         "properties": {
//           "id" : {"type": "integer"},
//           "title" : {"type": "string"},
//           "firstName" : {"type": "string"},
//           "lastName" : {"type": "string"},
//           "bio" : {"type": "string"},
//           "presenter" : {"type": "boolean"}
//         },
//         "required": ["id", "firstName", "lastName"]
//       }
//     }
//   }
// }

export default {
  "$schema": "http://json-schema.org/draft-04/schema#",
        "type": "object",
        "properties": {
          "id" : {"type": "integer"},
          "title" : {"type": "string"},
          "firstName" : {"type": "string"},
          "lastName" : {"type": "string"},
          "bio" : {"type": "string"},
          "presenter" : {"type": "boolean"}
        },
        "required": ["id", "firstName", "lastName"]
}











// export default {
//   "$schema": "http://json-schema.org/draft-04/schema#",
//   "id": "http://local.skeletor.com/schemata/node/attendee?_format=schema_json&_describes=api_json",
//   "title": "node:attendee Schema",
//   "description": "Describes the payload for 'node' entities of the 'attendee' bundle.",
//   "type": "object",
//   "properties": {
//     "nid": {
//       "type": "integer",
//       "title": "ID"
//     },
//     "uuid": {
//       "type": "string",
//       "title": "UUID",
//       "maxLength": 128
//     },
//     "vid": {
//       "type": "integer",
//       "title": "Revision ID"
//     },
//     "langcode": {
//       "type": "object",
//       "properties": {
//         "value": {
//           "type": "string",
//           "title": "Language code"
//         },
//         "language": {
//           "type": "language_reference",
//           "title": "Language object",
//           "description": "The referenced language"
//         }
//       },
//       "required": [
//         "value"
//       ],
//       "title": "Language"
//     },
//     "status": {
//       "type": "boolean",
//       "title": "Publishing status",
//       "description": "A boolean indicating the published state.",
//       "default": true
//     },
//     "title": {
//       "type": "string",
//       "title": "Title",
//       "maxLength": 255
//     },
//     "created": {
//       "type": "number",
//       "title": "Authored on",
//       "description": "The time that the node was created."
//     },
//     "changed": {
//       "type": "number",
//       "title": "Changed",
//       "description": "The time that the node was last edited."
//     },
//     "promote": {
//       "type": "boolean",
//       "title": "Promoted to front page",
//       "default": 0
//     },
//     "sticky": {
//       "type": "boolean",
//       "title": "Sticky at top of lists",
//       "default": false
//     },
//     "revision_timestamp": {
//       "type": "number",
//       "title": "Revision timestamp",
//       "description": "The time that the current revision was created."
//     },
//     "revision_log": {
//       "type": "string",
//       "title": "Revision log message",
//       "description": "Briefly describe the changes you have made.",
//       "default": ""
//     },
//     "revision_translation_affected": {
//       "type": "boolean",
//       "title": "Revision translation affected",
//       "description": "Indicates if the last edit of a translation belongs to current revision."
//     },
//     "default_langcode": {
//       "type": "boolean",
//       "title": "Default translation",
//       "description": "A flag indicating whether this is the default translation.",
//       "default": true
//     },
//     "path": {
//       "type": "object",
//       "properties": {
//         "alias": {
//           "type": "string",
//           "title": "Path alias"
//         },
//         "pid": {
//           "type": "integer",
//           "title": "Path id"
//         }
//       },
//       "title": "URL alias"
//     },
//     "field_bio": {
//       "type": "string",
//       "title": "Bio"
//     },
//     "field_firstname": {
//       "type": "string",
//       "title": "First Name",
//       "maxLength": 255
//     },
//     "field_lastname": {
//       "type": "string",
//       "title": "Last Name",
//       "maxLength": 255
//     },
//     "field_presenter": {
//       "type": "boolean",
//       "title": "Presenter?",
//       "default": 0
//     },
//     "field_title": {
//       "type": "string",
//       "title": "Title",
//       "maxLength": 255
//     }
//   },
//   "required": [
//     "nid",
//     "uuid",
//     "vid",
//     "title",
//     "revision_translation_affected",
//     "path",
//     "field_firstname",
//     "field_lastname"
//   ]
// }