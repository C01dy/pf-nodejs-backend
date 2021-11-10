const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Clothes",
  tableName: "clothes",
  columns: {
    id: {
      primary: true,
      generated: true,
    },
    url: {
      type: "string",
    },
  },
});
