const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Skill",
  tableName: "skill",
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
