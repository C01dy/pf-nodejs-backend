const { ObjectID } = require("mongodb");

const getSortFieldFromQueryParams = (queryParams) => {
  const queryParamsEntries = Object.entries(queryParams);
  const hasSortFields = !!queryParamsEntries.filter(
    ([key, _]) => key === "sortBy"
  ).length;

  if (hasSortFields) {
    const [sortField, sortFieldValue] = queryParams.sortBy.split("-");
    return {
      [sortField]: sortFieldValue === "asc" ? 1 : -1,
    };
  }
  return null;
};

const getFilterFieldsFromQueryParams = (queryParams) => {
  const queryParamsEntries = Object.entries(queryParams);
  const filterEntries = queryParamsEntries.filter(
    ([key, _]) => !key.includes("sortBy")
  );

  return Object.fromEntries(
    filterEntries.map(([key, value]) => {
      if (key === "name") {
        return ["name", { $regex: value }];
      }
      return [key, ObjectID(value)];
    })
  );
};

module.exports = {
  getSortFieldFromQueryParams,
  getFilterFieldsFromQueryParams,
};
