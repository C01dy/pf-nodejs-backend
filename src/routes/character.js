const router = require("express").Router();
const controllers = require("../controllers");

router.get("/race", controllers.getRace);
router.get("/class", controllers.getClass);
router.get("/skills", controllers.getSkills);
router.get("/history", controllers.getHistory);
router.get("/face", controllers.getFace);
router.get("/clothes", controllers.getClothes);

module.exports = router;
