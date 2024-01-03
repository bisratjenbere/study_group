const AppError = require("../utils/AppError");

const sendErrorDev = (err, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      err,
    });
  }
};

const sendErrorProduction = (err, req, res) => {
  if (req.originalUrl.startsWith("/api")) {
    if (err.isOperational) {
      return res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
      });
    }
    // For non-operational errors, handle differently if needed
  }
};

const handleDbCastError = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`;
  return new AppError(message, 400);
};

const handelDublicateField = (err) => {
  const value = err.keyValue.name;
  const message = `Duplicate field value: ${value}. Please use another value`;
  return new AppError(message, 400);
};

const handleValidationErrorDb = (err) => {
  const { errors } = err; // Check if this is where the errors are located
  const allErrorMessage = Object.values(errors)
    .map((element) => element.message)
    .join(".");
  return new AppError(allErrorMessage, 400);
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, req, res);
    return;
  }

  let handledError = err;

  if (err.name === "CastError") {
    handledError = handleDbCastError(err);
  } else if (err.code === 11000) {
    handledError = handelDublicateField(err);
  } else if (err.name === "ValidationError") {
    handledError = handleValidationErrorDb(err);
  } else if (err.name === "JsonWebTokenError") {
    handledError = new AppError("Please login", 401);
  }

  sendErrorProduction(handledError, req, res);
};
