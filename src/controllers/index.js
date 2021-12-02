const { ObjectID } = require("mongodb");

const { getConnection } = require("typeorm");

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

module.exports = {
  getRace,
  getClass,
  getSkills,
  getHistory,
  getFace,
  getClothes,
};
