const { getConnection } = require("typeorm");

const getRace = async (ctx) => {
  try {
    const data = await getConnection().getRepository("Race").find();
    ctx.res.status(200).json({
      OK: true,
      data
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

const getSkills = () => {
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

const getHistory = () => {
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

const getFace = () => {
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

const getClothes = () => {
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

module.exports = {
  getRace,
  getClass,
  getSkills,
  getHistory,
  getFace,
  getClothes,
};
