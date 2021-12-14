const { ObjectID } = require("mongodb");

const objectHasProp = (obj, prop) =>
  Object.prototype.hasOwnProperty.call(obj, prop);

const getSortFieldFromQueryParams = (queryParams) => {
  if (objectHasProp(queryParams, "sortBy")) {
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
    ([key, _]) => !key.includes("sortBy") && !key.includes("page")
  );

  return Object.fromEntries(
    filterEntries.map(([key, value]) => {
      const isPropObjectId = ObjectID.isValid(value);
      if (isPropObjectId) {
        return [key, ObjectID(value)];
      }
      return [key, { $regex: value }];
    })
  );
};

module.exports = {
  getSortFieldFromQueryParams,
  getFilterFieldsFromQueryParams,
  objectHasProp,
};
