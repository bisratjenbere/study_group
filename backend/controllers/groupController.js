const Group = require("../models/groupModel");
const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const handleFactory = require("./handleFactory");
exports.createGroup = handleFactory.createOne(Group);
exports.updateGroup = handleFactory.updateOne(Group);
exports.deleteGroup = handleFactory.deleteOne(Group);
exports.getGroupDetail = catchAsync(async (req, res, next) => {
  const groupDetail = await Group.find({})
    .populate("members")
    .populate("admin");

  if (!groupDetail) return next(new AppError("No Group Found", 404));
  return res.status(StatusCodes.ACCEPTED).json({
    status: "success",
    data: {
      data: groupDetail,
    },
  });
});
