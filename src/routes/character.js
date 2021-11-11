const router = require("express").Router();
const controllers = require("../controllers");

// get character options
router.get("/race", controllers.getRace);
router.get("/class", controllers.getClass);
router.get("/skills", controllers.getSkills);
router.get("/history", controllers.getHistory);
router.get("/face", controllers.getFace);
router.get("/clothes", controllers.getClothes);

router.post("/", controllers.setCharacter);

module.exports = router;
