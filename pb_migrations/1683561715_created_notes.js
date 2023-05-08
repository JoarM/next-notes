migrate((db) => {
  const collection = new Collection({
    "id": "4l9i2rw6vny9swi",
    "created": "2023-05-08 16:01:55.666Z",
    "updated": "2023-05-08 16:01:55.666Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hc8hbtp8",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4l9i2rw6vny9swi");

  return dao.deleteCollection(collection);
})
