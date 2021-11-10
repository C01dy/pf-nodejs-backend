const router = require("express").Router();
const character = require("./character");

router.use("/character", character);

module.exports = router;
