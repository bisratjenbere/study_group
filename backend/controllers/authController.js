const User = require("../models/userModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");
const { hashPassword, comparePassword } = require("../utils/passwordUtils");

const { StatusCodes } = require("http-status-codes");
exports.login = catchAsync(async (req, res, next) => {
  const { userName, password } = req.body;

  const loggedInUser = await User.findOne({ userName });

  const isValidUser =
    loggedInUser && (await comparePassword(password, loggedInUser.password));

  if (!isValidUser) {
    return next(
      new AppError(`Incorrect email or password`, StatusCodes.UNAUTHORIZED)
    );
  }

  return res.status(StatusCodes.OK).json({
    status: "sucess",
    data: {
      data: loggedInUser,
    },
  });
});

exports.signUp = catchAsync(async (req, res, next) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  const newUser = await User.create(req.body);
  return res.status(StatusCodes.OK).json({
    status: "sucess",
    data: {
      data: newUser,
    },
  });
});
