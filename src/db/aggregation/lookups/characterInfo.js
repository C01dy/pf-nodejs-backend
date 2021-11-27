const {
  createLookupForObjectId,
  createLookupForObjectIdArray,
} = require("../../../services/lookupFactory");

// TODO: create lookup for skills array

const characterAggregationStages = [
  ...createLookupForObjectId("race"),
  ...createLookupForObjectId("class"),
  // ...createLookupForSingle("history"),
  // ...createLookupForSingle("clothes"),
  // ...createLookupForSingle("face"),
  ...createLookupForObjectIdArray("skill"),
];

module.exports = {
  characterAggregationStages,
};
