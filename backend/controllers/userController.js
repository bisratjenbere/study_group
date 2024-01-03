const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/AppError");
const handleFactory = require("./handleFactory");
exports.updateMe = handleFactory.updateOne(User);
exports.deleteUser = handleFactory.deleteOne(User);
exports.getAllUser = catchAsync(async (req, res, next) => {
  const users = await User.find({});
  if (!users) {
    return next(
      new AppError(`No user found with that ID`, StatusCodes.NOT_FOUND)
    );
  }
  return res.status(StatusCodes.OK).json({
    status: "success",
    data: {
      data: users,
    },
  });
});
