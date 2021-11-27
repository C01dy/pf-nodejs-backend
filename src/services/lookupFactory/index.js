const createLookupForObjectIdArray = (name) => [
  {
    $lookup: {
      from: name,
      localField: name,
      foreignField: "_id",
      as: name,
    },
  },
];

const createLookupForObjectId = (name) => [
  ...createLookupForObjectIdArray(name),
  {
    $unwind: `$${name}`,
  },
];

module.exports = {
  createLookupForObjectIdArray,
  createLookupForObjectId,
};
