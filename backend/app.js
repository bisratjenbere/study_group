const mongose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");

const userRouter = require("./routes/userRoute");
const messageRouter = require("./routes/messageRoute");
const groupRouter = require("./routes/groupRoute");

const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/AppError");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());
dotenv.config();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/groups", groupRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);
module.exports = app;
