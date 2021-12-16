const {
  getOneClass,
  getAllClasses,
} = require("../../services/db/characteristics");

const getClassController = async (req, res) => {
  try {
    const clazz = await getOneClass(req.params.id);
    res.status(200).json({
      OK: true,
      data: clazz,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getAllClassesController = async (_, res) => {
  try {
    const classes = await getAllClasses();
    res.status(200).json({
      OK: true,
      data: classes,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

module.exports = {
  getClassController,
  getAllClassesController,
};
