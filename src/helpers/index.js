const matchPropNameFromSortString = (str) => str.split("_").pop();

const matchSortFields = (obj) =>
  Object.fromEntries(
    Object.entries(obj)
      .filter(([key, _]) => key.includes("sortBy"))
      .map(([key, value]) => [matchPropNameFromSortString(key), +value])
  );

const matchFilterFields = (obj) =>
  Object.fromEntries(
    Object.entries(obj)
      .filter(([key, _]) => !key.includes("sortBy"))
      .map(([key, value]) => {
        if (key === "name") {
          return [key, value];
        }
        return [`${key}.name`, value];
      })
  );

module.exports = {
  matchSortFields,
  matchFilterFields,
};
