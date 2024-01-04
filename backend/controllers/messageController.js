const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");
const handleFactory = require("./handleFactory");
const message = require("../models/messageModel");
exports.createMessage = handleFactory.createOne(message);
exports.updateMessage = handleFactory.updateOne(message);
exports.deleteMessage = handleFactory.deleteOne(message);

exports.createMessages = handleFactory.deleteAndCreateMany(message);

exports.getMessageByGroupID = catchAsync(async (req, res, next) => {
  const params = req.params.id;
  const groupMessage = await message
    .find({ group: params })
    .populate({
      path: "group",
      populate: { path: "admin" },
    })
    .populate({
      path: "group",
      populate: { path: "members" },
    })
    .populate("creator")
    .populate("comment.commenter");

  if (!groupMessage) return next(new AppError("No message Found", 404));

  return res.status(StatusCodes.ACCEPTED).json({
    status: "success",
    data: {
      data: groupMessage,
    },
  });
});
