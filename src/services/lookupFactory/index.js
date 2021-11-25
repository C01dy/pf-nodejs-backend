const createLookup = (collection) => [
  {
    $lookup: {
      from: collection,
      let: { prop: `$${collection}` },
      pipeline: [
        {
          $match: {
            $expr: {
              $eq: ["$_id", { $toObjectId: "$$prop" }],
            },
          },
        },
      ],
      as: collection,
    },
  },
  {
    $unwind: {
      path: `$${collection}`,
      preserveNullAndEmptyArrays: true,
    },
  },
];

module.exports = {
  createLookup,
};
