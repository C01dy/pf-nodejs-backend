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
    },
    name: {
      type: "string",
    },
    class: {
      type: "string",
    },
    skills: {
      type: "array",
    },
    history: {
      type: "string",
    },
    face: {
      type: "string",
    },
    clothes: {
      type: "string",
    },
  },
});
