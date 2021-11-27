const { ObjectID } = require("mongodb");
const { getMongoRepository } = require("typeorm");
const {
  characterAggregationStages,
} = require("../db/aggregation/lookups/characterInfo");
const Character = require("../entity/Character");

const getCharacter = async (req, res) => {
  const characterRepository = getMongoRepository(Character);
  const characterData = await characterRepository.findOne(req.params.id);
  res.json(characterData);
};

const createCharacter = async (_, res) => {
  const characterRepository = getMongoRepository(Character);
  const characterData = await characterRepository.insertOne({
    name: "Joe",
    lastStep: 0,
  });

  res.json(characterData.ops[0]);
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

  console.log(r);
  characterAggregation.next((err, result) => {
    res.json(result);
  });
};

module.exports = {
  updateCharacter,
  createCharacter,
  getCharacter,
  getCharacterInfo,
};
