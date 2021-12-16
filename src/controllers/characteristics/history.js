const {
  getOneHistory,
  getAllHistories,
} = require("../../services/db/characteristics");

const getHistoryController = async (req, res) => {
  try {
    const history = await getOneHistory(req.params.id);
    res.status(200).json({
      OK: true,
      data: history,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getAllHistoriesController = async (_, res) => {
  try {
    const histories = await getAllHistories();
    res.status(200).json({
      OK: true,
      data: histories,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

module.exports = {
  getHistoryController,
  getAllHistoriesController,
};
