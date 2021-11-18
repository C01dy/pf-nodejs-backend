const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Race",
  tableName: "race",
  columns: {
    id: {
      primary: true,
      generated: true,
      objectId: true,
    },
    name: {
      type: "string",
    },
  },
});
