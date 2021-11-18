const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "History",
  tableName: "history",
  columns: {
    id: {
      primary: true,
      generated: true,
      objectId: true,
    },
    about: {
      type: "text",
    },
  },
});
