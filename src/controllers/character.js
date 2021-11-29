const { ObjectID } = require("mongodb");
const { getMongoRepository } = require("typeorm");
const {
  characterAggregationStages,
} = require("../db/aggregation/lookups/characterInfo");
const Character = require("../entity/Character");
const { createCharactersArray } = require("../services/characterFactory");

const getCharacter = async (req, res) => {
  const characterRepository = getMongoRepository(Character);
  if (req.params.id) {
    const characterData = await characterRepository.findOne(
      ObjectID(req.params.id)
    );
    res.json(characterData);
  } else {
    const characterData = await characterRepository.find();
    res.json(characterData);
  }
};

const createCharacter = async (req, res) => {
  const characterRepository = getMongoRepository(Character);
  const characterData = await characterRepository.insertOne({
    name: req.body.name,
    lastStep: 0,
  });

  res.json(characterData.ops[0]);
};

const createCharactersCollection = async (req, res) => {
  const characterRepository = getMongoRepository(Character);
  const characters = createCharactersArray(20);

  const characterData = await characterRepository.insertMany(characters);

  res.json(characterData.ops);
};

const updateCharacter = async (req, res) => {
  const characterRepository = getMongoRepository(Character);
  const keyPropToUpdate = Object.keys(req.body).pop();
  let valuePropToUpdate = req.body[keyPropToUpdate];

  if (Array.isArray(valuePropToUpdate)) {
    valuePropToUpdate = valuePropToUpdate.map((el) => ObjectID(el));
  } else {
    valuePropToUpdate = ObjectID(valuePropToUpdate);
  }

  const characterData = await characterRepository.findOneAndUpdate(
    { _id: ObjectID(req.params.id) },
    {
      $set: { [keyPropToUpdate]: valuePropToUpdate },
    }
  );

  res.json(characterData.value);
};

const getCharacterInfo = async (req, res) => {
  const characterRepository = getMongoRepository(Character);

  const characterAggregation = characterRepository.aggregate([
    { $match: { _id: ObjectID(req.params.id) } },
    ...characterAggregationStages,
  ]);

  characterAggregation.next((err, result) => {
    res.json(result);
  });
};

module.exports = {
  updateCharacter,
  createCharacter,
  getCharacter,
  getCharacterInfo,
  createCharactersCollection,
};
