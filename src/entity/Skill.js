const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Skill",
  tableName: "skill",
  columns: {
    id: {
      primary: true,
      generated: true,
    },
    name: {
      type: "varchar",
    },
    skills: {
      type: "array",
    },
  },
});
