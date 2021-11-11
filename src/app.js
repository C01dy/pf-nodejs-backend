const express = require("express");
const typeorm = require("typeorm");
const cors = require("cors");

const routes = require("./routes");
const Character = require("./entity/Character");
const Race = require("./entity/Race");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(routes);

const connect = async () => {
  const connection = await typeorm.createConnection({
    type: "mongodb",
    url: `mongodb+srv://coldy:${process.env.DB_PASS}@cluster0.x1xet.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    entities: [Character, Race],
  });

  return connection;
};

connect().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
  });
});
