const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Character",
  tableName: "character",
  columns: {
    id: {
      primary: true,
      objectId: true,
    },
    race: {
      objectId: true,
      nullable: true,
    },
    name: {
      type: "string",
      nullable: true,
    },
    class: {
      objectId: true,
      nullable: true,
    },
    skills: {
      type: "array",
      nullable: true,
    },
    history: {
      objectId: true,
    },
    face: {
      objectId: true,
    },
    clothes: {
      objectId: true,
    },
    lastStep: {
      type: "int",
      nullable: true,
    },
  },
});
