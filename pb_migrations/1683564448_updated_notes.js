migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4l9i2rw6vny9swi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "crs38iiz",
    "name": "content",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4l9i2rw6vny9swi")

  // remove
  collection.schema.removeField("crs38iiz")

  return dao.saveCollection(collection)
})
