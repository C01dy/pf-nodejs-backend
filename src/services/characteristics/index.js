const { getConnection } = require("typeorm");
const { ObjectID } = require("mongodb");

const getAllCharacteristics = async (repositoryName) => {
  const repo = await getConnection().getRepository(repositoryName);
  const res = await repo.find();

  return res;
};

const getOneCharacterisctic = async (repositoryName, id) => {
  const repo = await getConnection().getRepository(repositoryName);
  const res = await repo.findOne(ObjectID(id));

  return res;
};

module.exports = {
  getOneClass: (id) => getOneCharacterisctic("Class", id),
  getAllClasses: () => getAllCharacteristics("Class"),

  getOneRace: (id) => getOneCharacterisctic("Race", id),
  getAllRaces: () => getAllCharacteristics("Race"),

  getOneFace: (id) => getOneCharacterisctic("Face", id),
  getAllFaces: () => getAllCharacteristics("Face"),

  getOneSkill: (id) => getOneCharacterisctic("Skill", id),
  getAllSkills: () => getAllCharacteristics("Skill"),

  getOneHistory: (id) => getOneCharacterisctic("History", id),
  getAllHistories: () => getAllCharacteristics("History"),

  getOneClothes: (id) => getOneCharacterisctic("Clothes", id),
  getAllClothes: () => getAllCharacteristics("Clothes"),
};
