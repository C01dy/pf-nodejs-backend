const { objectHasProp } = require("../helpers");
const {
  getOne,
  getAll,
  createOne,
  createCollection,
  updateOne,
  getAllInfo,
  getOneInfo,
} = require("../services/db/character");

const getOneCharacter = async (req, res) => {
  const character = await getOne(req.params.id);
  res.json(character);
};

const getAllCharacters = async (_, res) => {
  const characters = await getAll();
  res.json(characters);
};

const createOneCharacter = async (req, res) => {
  const character = await createOne(req.body.name);
  res.json(character);
};

const createCharactersCollection = async (_, res) => {
  const characters = await createCollection(20);
  res.json(characters);
};

const updateOneCharacter = async (req, res) => {
  const character = await updateOne(req.params.id, req.body);
  res.json(character);
};

const getAllCharactersInfo = async (req, res) => {
  const limit = 10;
  const queryParams = { ...req.query };
  if (objectHasProp(req.query, "page")) {
    queryParams.skip = (+queryParams.page - 1) * limit;
    queryParams.limit = limit;
  }
  const charactersInfo = await getAllInfo(queryParams);
  res.json(charactersInfo);
};

const getOneCharacterInfo = async (req, res) => {
  const characterInfo = await getOneInfo(req.params.id);
  res.json(characterInfo);
};

module.exports = {
  updateOneCharacter,
  createOneCharacter,
  getOneCharacter,
  getAllCharacters,
  getAllCharactersInfo,
  getOneCharacterInfo,
  createCharactersCollection,
};
