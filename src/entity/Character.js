const { EntitySchema } = require("typeorm");
const { ObjectID } = require("mongodb");

module.exports = new EntitySchema({
  name: "Character",
  tableName: "character",
  columns: {
    id: {
      primary: true,
      objectId: true,
    },
    race: {
      type: ObjectID,
    },
    name: {
      type: "string",
    },
    class: {
      type: ObjectID,
    },
    skills: {
      type: "array",
    },
    history: {
      type: ObjectID,
    },
    face: {
      type: ObjectID,
    },
    clothes: {
      type: ObjectID,
    },
    lastStep: {
      type: ObjectID,
    },
  },
});
