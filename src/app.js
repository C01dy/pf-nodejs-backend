const { init, getAppMiddlewares } = require("./init");
require("dotenv").config();

getAppMiddlewares();
init();
