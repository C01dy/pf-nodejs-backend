const { getOneRace, getAllRaces } = require("../../services/characteristics");

const getRaceController = async (req, res) => {
  try {
    const race = await getOneRace(req.params.id);
    res.status(200).json({
      OK: true,
      data: race,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getAllRacesController = async (_, res) => {
  try {
    const races = await getAllRaces();
    res.status(200).json({
      OK: true,
      data: races,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

module.exports = {
  getRaceController,
  getAllRacesController,
};
