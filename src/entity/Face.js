const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Face",
  tableName: "face",
  columns: {
    id: {
      primary: true,
      generated: true,
      objectId: true,
    },
    url: {
      type: "string",
    },
  },
});
