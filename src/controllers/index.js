const { getConnection } = require("typeorm");

const getRace = async (ctx) => {
  try {
    const data = await getConnection().getRepository("Race").find();
    ctx.res.status(200).json({
      OK: true,
      data,
    });
  } catch (err) {
    console.error(err);
    ctx.res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getClass = async (ctx) => {
  try {
    const data = await getConnection().getRepository("Class").find();
    ctx.res.status(200).json({
      OK: true,
      data,
    });
  } catch (err) {
    console.error(err);
    ctx.res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getSkills = async (ctx) => {
  try {
    const data = await getConnection().getRepository("Skill").find();
    ctx.res.status(200).json({
      OK: true,
      data: data,
    });
  } catch (err) {
    console.error(err);
    ctx.res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getHistory = async (ctx) => {
  try {
    const data = await getConnection().getRepository("History").find();
    ctx.res.status(200).json({
      OK: true,
      data: data,
    });
  } catch (err) {
    console.error(err);
    ctx.res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getFace = async (ctx) => {
  try {
    const data = await getConnection().getRepository("Face").find();
    ctx.res.status(200).json({
      OK: true,
      data: data,
    });
  } catch (err) {
    console.error(err);
    ctx.res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getClothes = async (ctx) => {
  try {
    const data = await getConnection().getRepository("Clothes").find();
    ctx.res.status(200).json({
      OK: true,
      data: data,
    });
  } catch (err) {
    console.error(err);
    ctx.res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const createCharacter = async (req, res) => {
  const { name, lastStep } = req.body;
  const characterRepo = await getConnection().getRepository("Character");
  const createdCharacter = {
    name,
    lastStep,
  };

  await characterRepo.save(createdCharacter).then((characterData) => {
    res.json(characterData);
  });
};

const updateCharacter = async (req, res) => {
  const { id } = req.body;
  const characterRepo = await getConnection().getRepository("Character");
  const character = await characterRepo.findOne({
    where: { id },
  });

  await characterRepo
    .save({
      ...character,
      ...req.body,
    })
    .then((characterData) => res.json(characterData));

  // await characterRepo
  //   .update(id, req.body)
  //   .then((characterData) => res.json(characterData));
};

const getCharacter = async (req, res) => {
  const { id } = req.params.id;
  const characterRepo = await getConnection().getRepository("Character");

  const character = await characterRepo.findOne(id);

  res.status(200).json(character);
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
};
