const { createLookup } = require("../../../services/lookupFactory");

// TODO: create lookup for skills array

const characterAggregationStages = [
  createLookup("race"),
  createLookup("class"),
  createLookup("history"),
  createLookup("clothes"),
  createLookup("face"),
  createLookup("skills"),
];

module.exports = {
  characterAggregationStages,
};
