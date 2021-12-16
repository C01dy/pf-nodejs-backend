const express = require("express");
const typeorm = require("typeorm");
const cors = require("cors");
const routes = require("./routes");

const Character = require("./entity/Character");
const Race = require("./entity/Race");
const RoleClass = require("./entity/RoleClass");
const Skill = require("./entity/Skill");
const Face = require("./entity/Face");
const History = require("./entity/History");
const Clothes = require("./entity/Clothes");
const logger = require("./services/logger");

const app = express();

const dbEntities = [Character, Race, RoleClass, Skill, Face, History, Clothes];

const getAppMiddlewares = () => {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.static("assets"));
  app.use(routes);
};

const connect = async () => {
  const connection = await typeorm.createConnection({
    type: "mongodb",
    url: `mongodb+srv://coldy:${process.env.DB_PASS}@cluster0.x1xet.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    entities: dbEntities,
  });

  return connection;
};

const init = () => {
  connect().then(() => {
    app.listen(process.env.PORT, () => {
      logger.log("info", `Server is running on ${process.env.PORT}`);
    });
  });
};

module.exports = {
  init,
  getAppMiddlewares,
};
