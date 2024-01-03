const catchAsync = require("../utils/catchAsync");
const { StatusCodes } = require("http-status-codes");
const AppError = require("../utils/AppError");
const { hashPassword } = require("../utils/passwordUtils");

exports.getOne = (model, popOption) =>
  catchAsync(async (req, res, next) => {
    let query = model.findById(req.params.id);
    if (popOption) {
      query.populate(popOption);
    }
    const doc = await query;

    if (!doc) {
      return next(
        new AppError(`No document found with that ID`, StatusCodes.NOT_FOUND)
      );
    }
    return res.status(StatusCodes.OK).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.createOne = (model) =>
  catchAsync(async (req, res, next) => {
    const doc = await model.create(req.body);
    return res.status(StatusCodes.CREATED).json({
      status: "sucess",
      data: {
        data: doc,
      },
    });
  });

exports.deleteOne = (model) =>
  catchAsync(async (req, res, next) => {
    const doc = await model.findByIdAndDelete(req.params.id);
    return res.status(StatusCodes.ACCEPTED).json({
      status: "success",
      data: null,
    });
  });

exports.updateOne = (model) =>
  catchAsync(async (req, res, next) => {
    if (req.body.password)
      req.body.password = await hashPassword(req.body.password);

    const doc = await model.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });

    return res.status(StatusCodes.OK).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });
