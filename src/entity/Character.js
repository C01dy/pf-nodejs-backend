const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Character",
  tableName: "character",
  columns: {
    id: {
      primary: true,
      // generated: true,
      objectId: true,
    },
    race: {
      type: "string",
      // objectId: true,
      nullable: true,
    },
    name: {
      type: "string",
      nullable: true,
    },
    class: {
      type: "string",
      // objectId: true,
      nullable: true,
    },
    skills: {
      type: "array",
      nullable: true,
    },
    history: {
      type: "string",
      // objectId: true,
      nullable: true,
    },
    face: {
      type: "string",
      // objectId: true,
      nullable: true,
    },
    clothes: {
      type: "string",
      // objectId: true,
      nullable: true,
    },
    lastStep: {
      type: "int",
      nullable: true,
    },
  },
});
