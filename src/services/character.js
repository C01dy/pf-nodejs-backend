const { ObjectID } = require("mongodb");
const { getMongoRepository } = require("typeorm");
const Character = require("../entity/Character");
const {
  characterAggregationStages,
} = require("../db/aggregation/lookups/characterInfo");

const { createCharactersArray } = require("./characterFactory");
const { matchSortFields, matchFilterFields } = require("../helpers");

const getOne = async (id) => {
  const characterRepository = getMongoRepository(Character);
  const res = await characterRepository.findOne(ObjectID(id));
  return res;
};

const getAll = async () => {
  const characterRepository = getMongoRepository(Character);
  const res = await characterRepository.find();
  return res;
};

const createOne = async (name) => {
  const characterRepository = getMongoRepository(Character);
  const res = await characterRepository.insertOne({
    name,
    lastStep: 0,
  });

  return res.ops[0];
};

const createCollection = async (quantity) => {
  const characterRepository = getMongoRepository(Character);
  const characters = createCharactersArray(quantity);

  const res = await characterRepository.insertMany(characters);
  return res;
};

const updateOne = async (id, characterData) => {
  const characterRepository = getMongoRepository(Character);
  const keyPropToUpdate = Object.keys(characterData).pop();
  let valuePropToUpdate = characterData[keyPropToUpdate];

  if (Array.isArray(valuePropToUpdate)) {
    valuePropToUpdate = valuePropToUpdate.map((el) => ObjectID(el));
  } else {
    valuePropToUpdate = ObjectID(valuePropToUpdate);
  }

  const res = await characterRepository.findOneAndUpdate(
    { _id: ObjectID(id) },
    {
      $set: { [keyPropToUpdate]: valuePropToUpdate },
    }
  );

  return res;
};

const getAllInfo = async (queryObj) => {
  const characterRepository = getMongoRepository(Character);
  const copyCharacterAggregationStages = [...characterAggregationStages];

  const sortFields = matchSortFields(queryObj);
  const filterFields = matchFilterFields(queryObj);

  if (Object.keys(sortFields).length) {
    copyCharacterAggregationStages.push({
      $sort: sortFields,
    });
  }

  if (Object.keys(filterFields).length) {
    copyCharacterAggregationStages.push({
      $match: filterFields,
    });
  }

  const characterAggregation = characterRepository.aggregate([
    ...copyCharacterAggregationStages,
  ]);

  const res = await characterAggregation.toArray();
  return res;
};

const getOneInfo = async (id) => {
  const characterRepository = getMongoRepository(Character);

  const characterAggregation = characterRepository.aggregate([
    { $match: { _id: ObjectID(id) } },
    ...characterAggregationStages,
  ]);

  return characterAggregation.next((err, result) => result);
};

module.exports = {
  getOne,
  getAll,
  createOne,
  createCollection,
  updateOne,
  getAllInfo,
  getOneInfo,
};
