const status = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log(statusCode);
  res.json({ message: err.message, stackTrace: err.stack });
  switch (statusCode) {
    case status.constants.VALIDATION_ERROR:
      res.status(statusCode).send({ message: "Bad Request" });
      break;
    case status.constants.UNAUTHORIZED:
      res.status(statusCode).send({ message: "Bad Request" });
      break;
    case status.constants.NOT_FOUND_ERROR:
      res.status(statusCode).send({ message: "Bad Request" });
      break;
    case status.constants.FORBIDDEN:
      res.status(statusCode).send({ message: "Bad Request" });
      break;
    case status.constants.INTERNAL_SERVER_ERROR:
      res.status(statusCode).send({ message: "Bad Request" });
      break;
    default:
      res.send("Error");
  }
};

module.exports = errorHandler;
