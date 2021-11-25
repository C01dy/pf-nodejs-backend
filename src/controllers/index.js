const { ObjectID } = require("mongodb");

const { getConnection } = require("typeorm");
const {
  characterAggregationStages,
} = require("../db/aggregation/lookups/characterData");

const getRace = async (req, res) => {
  try {
    let data;
    const repo = await getConnection().getRepository("Race");
    if (req.params.id) {
      data = await repo.findOne({ where: req.params.id });
    } else {
      data = await repo.find();
    }

    res.status(200).json({
      OK: true,
      data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getClass = async (req, res) => {
  try {
    let data;
    const repo = await getConnection().getRepository("Class");
    if (req.params.id) {
      data = await repo.findOne({ where: req.params.id });
    } else {
      data = await repo.find();
    }

    res.status(200).json({
      OK: true,
      data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getSkills = async (req, res) => {
  try {
    let data;
    const repo = await getConnection().getRepository("Skill");
    if (req.params.id) {
      data = await repo.findOne({ where: req.params.id });
    } else {
      data = await repo.find();
    }

    res.status(200).json({
      OK: true,
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getHistory = async (req, res) => {
  try {
    let data;
    const repo = await getConnection().getRepository("History");
    if (req.params.id) {
      data = await repo.findOne({ where: req.params.id });
    } else {
      data = await repo.find();
    }
    res.status(200).json({
      OK: true,
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getFace = async (req, res) => {
  try {
    let data;
    const repo = await getConnection().getRepository("Face");
    if (req.params.id) {
      data = await repo.findOne({ where: req.params.id });
    } else {
      data = await repo.find();
    }
    res.status(200).json({
      OK: true,
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getClothes = async (req, res) => {
  try {
    let data;
    const repo = await getConnection().getRepository("Clothes");
    if (req.params.id) {
      data = await repo.findOne({ where: req.params.id });
    } else {
      data = await repo.find();
    }
    res.status(200).json({
      OK: true,
      data: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const createCharacter = async (req, res) => {
  const { name, lastStep } = req.body;
  const characterRepo = await getConnection().getRepository("Character");
  const createdCharacter = {
    // name,
    // lastStep,
    ...req.body,
  };

  await characterRepo.save(createdCharacter).then((characterData) => {
    res.json(characterData);
  });
};

const updateCharacter = async (req, res) => {
  const characterRepo = await getConnection().getRepository("Character");
  const character = await characterRepo.findOne({
    where: { _id: ObjectID(req.params.id) },
  });

  console.log(character);

  await characterRepo
    .save({
      id: req.params.id,
      ...character,
      ...req.body,
    })
    .then((characterData) => res.json(characterData));
};

const getCharacter = async (req, res) => {
  const { id } = req.params.id;
  const characterRepo = await getConnection().getRepository("Character");

  const character = await characterRepo.findOne(id);

  res.status(200).json(character);
};

const getCharacterInfo = async (req, res) => {
  const repo = await getConnection().getMongoRepository("Character");

  const characterObjectId = ObjectID(req.params.id);

  const d = repo.aggregate([
    { $match: { _id: characterObjectId } },
    ...characterAggregationStages,
  ]);

  d.next((err, result) => {
    res.json({
      result,
    });
  });
};

module.exports = {
  getRace,
  getClass,
  getSkills,
  getHistory,
  getFace,
  getClothes,

  createCharacter,
  updateCharacter,
  getCharacter,
  getCharacterInfo,
};
