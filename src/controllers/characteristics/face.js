const { getOneFace, getAllFaces } = require("../../services/characteristics");

const getFaceController = async (req, res) => {
  try {
    const face = await getOneFace(req.params.id);
    res.status(200).json({
      OK: true,
      data: face,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getAllFacesController = async (_, res) => {
  try {
    const faces = await getAllFaces();
    res.status(200).json({
      OK: true,
      data: faces,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

module.exports = {
  getFaceController,
  getAllFacesController,
};
