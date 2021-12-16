const { createLogger, transports, format } = require("winston");
require("winston-mongodb");

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.File({
      filename: "info.log",
      level: "info",
    }),
    new transports.File({
      filename: "error.log",
      level: "error",
    }),
    new transports.Console({
      filename: "info.log",
      level: "info",
    }),
  ],
});

module.exports = logger;
