const { getOneSkill, getAllSkills } = require("../../services/characteristics");

const getSkillController = async (req, res) => {
  try {
    const skill = await getOneSkill(req.params.id);
    res.status(200).json({
      OK: true,
      data: skill,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

const getAllSkillsController = async (_, res) => {
  try {
    const skills = await getAllSkills();
    res.status(200).json({
      OK: true,
      data: skills,
    });
  } catch (error) {
    res.status(500).json({
      OK: false,
      message: "Ooops, something went wrong",
    });
  }
};

module.exports = {
  getSkillController,
  getAllSkillsController,
};
