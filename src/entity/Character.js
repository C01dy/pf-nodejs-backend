const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Character",
  tableName: "character",
  columns: {
    id: {
      primary: true,
      generated: true,
    },
    race: {
      type: "varchar",
    },
    name: {
      type: "varchar",
    },
    class: {
      type: "varchar",
    },
    skills: {
      type: "array",
    },
    history: {
      type: "text",
    },
    face: {
      type: "string",
    },
    clothes: {
      type: "string",
    },
  },
});
