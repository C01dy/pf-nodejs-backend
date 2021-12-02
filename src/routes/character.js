const router = require("express").Router();
const controllers = require("../controllers");
const characterControllers = require("../controllers/character");

router.get("/race/:id?", controllers.getRace);
router.get("/class/:id?", controllers.getClass);
router.get("/skills/:id?", controllers.getSkills);
router.get("/history/:id?", controllers.getHistory);
router.get("/face/:id?", controllers.getFace);
router.get("/clothes/:id?", controllers.getClothes);

router.get("/info/many", characterControllers.getAllCharactersInfo);
router.get("/info/one/:id", characterControllers.getOneCharacterInfo);
router.get("/", characterControllers.getAllCharacters);
router.get("/:id", characterControllers.getOneCharacter);
router.post("/", characterControllers.createOneCharacter);
router.put("/:id", characterControllers.updateOneCharacter);
router.post("/collection", characterControllers.createCharactersCollection);

module.exports = router;
