const router = require("express").Router();
const controllers = require("../controllers");
const characterControllers = require("../controllers/character");

// get character options
router.get("/race/:id?", controllers.getRace);
router.get("/class/:id?", controllers.getClass);
router.get("/skills/:id?", controllers.getSkills);
router.get("/history/:id?", controllers.getHistory);
router.get("/face/:id?", controllers.getFace);
router.get("/clothes/:id?", controllers.getClothes);

router.get("/:id?", characterControllers.getCharacter);
router.get("/info/:id", characterControllers.getCharacterInfo);
router.post("/", characterControllers.createCharacter);
router.put("/:id", characterControllers.updateCharacter);
router.post("/collection", characterControllers.createCharactersCollection);

module.exports = router;
