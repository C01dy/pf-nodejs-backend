const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Character",
  tableName: "character",
  columns: {
    id: {
      primary: true,
      generated: true,
      objectId: true,
    },
    race: {
      type: "string",
      nullable: true,
    },
    name: {
      type: "string",
      nullable: true,
    },
    class: {
      type: "string",
      nullable: true,
    },
    skills: {
      type: "array",
      nullable: true,
    },
    history: {
      type: "string",
      nullable: true,
    },
    face: {
      type: "string",
      nullable: true,
    },
    clothes: {
      type: "string",
      nullable: true,
    },
    lastStep: {
      type: "int",
      nullable: true,
    },
  },
});
