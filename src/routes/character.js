const router = require("express").Router();
const characterControllers = require("../controllers/character");

const {
  getClassController,
  getAllClassesController,
} = require("../controllers/characteristics/class");
const {
  getClothesController,
  getAllClothesController,
} = require("../controllers/characteristics/clothes");
const {
  getFaceController,
  getAllFacesController,
} = require("../controllers/characteristics/face");
const {
  getRaceController,
  getAllRacesController,
} = require("../controllers/characteristics/race");
const {
  getSkillController,
  getAllSkillsController,
} = require("../controllers/characteristics/skill");
const {
  getHistoryController,
  getAllHistoriesController,
} = require("../controllers/characteristics/history");

router.get("/race", getAllRacesController);
router.get("/class", getAllClassesController);
router.get("/skill", getAllSkillsController);
router.get("/history", getAllHistoriesController);
router.get("/face", getAllFacesController);
router.get("/clothes", getAllClothesController);

router.get("/race/:id", getRaceController);
router.get("/class/:id", getClassController);
router.get("/skill/:id", getSkillController);
router.get("/history/:id", getHistoryController);
router.get("/face/:id", getFaceController);
router.get("/clothes/:id", getClothesController);

router.get("/info/many?", characterControllers.getAllCharactersInfo);
router.get("/info/one/:id", characterControllers.getOneCharacterInfo);
router.get("/", characterControllers.getAllCharacters);
router.get("/:id", characterControllers.getOneCharacter);
router.post("/", characterControllers.createOneCharacter);
router.put("/:id", characterControllers.updateOneCharacter);
router.post("/collection", characterControllers.createCharactersCollection);

module.exports = router;
