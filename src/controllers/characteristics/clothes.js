const {
  getOneClothes,
  getAllClothes,
} = require("../../services/characteristics");

const getClothesController = async (req, res) => {
  try {
    const clothes = await getOneClothes(req.params.id);
    res.status(200).json({
      OK: true,
      data: clothes,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getAllClothesController = async (_, res) => {
  try {
    const clothes = await getAllClothes();
    res.status(200).json({
      OK: true,
      data: clothes,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

module.exports = {
  getClothesController,
  getAllClothesController,
};
