const createLookup = (collection) => ({
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
      //   {
      //     $unwind: `$${collection}`,
      //   },
    ],
    as: collection,
  },
});

module.exports = {
  createLookup,
};
