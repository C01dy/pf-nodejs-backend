const router = require("express").Router();
const controllers = require("../controllers");

// get character options
router.get("/race/:id?", controllers.getRace);
router.get("/class/:id?", controllers.getClass);
router.get("/skills/:id?", controllers.getSkills);
router.get("/history/:id?", controllers.getHistory);
router.get("/face/:id?", controllers.getFace);
router.get("/clothes/:id?", controllers.getClothes);

// router.get('/race/:id', con)

router.get("/:id", controllers.getCharacter);

router.post("/", controllers.createCharacter);
router.put("/:id", controllers.updateCharacter);

module.exports = router;
