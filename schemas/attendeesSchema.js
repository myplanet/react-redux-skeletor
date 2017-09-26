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

export default {
  "properties": {
    "attendees": {
      "type": "array",
      "items": {
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
    }
  }
}
