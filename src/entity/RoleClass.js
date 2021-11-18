const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Class",
  tableName: "class",
  columns: {
    id: {
      primary: true,
      generated: true,
      objectId: true,
    },
    name: {
      type: "varchar",
    },
  },
});
