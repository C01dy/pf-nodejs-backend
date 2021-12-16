const {
  createLookupForObjectId,
  createLookupForObjectIdArray,
} = require("../../lookupFactory");

const characterAggregationStages = [
  ...createLookupForObjectId("race"),
  ...createLookupForObjectId("class"),
  ...createLookupForObjectId("history"),
  ...createLookupForObjectId("clothes"),
  ...createLookupForObjectId("face"),
  ...createLookupForObjectIdArray("skill"),
];

module.exports = {
  characterAggregationStages,
};
