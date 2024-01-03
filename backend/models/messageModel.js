const mongoose = require("mongoose");
const { Schema } = mongoose;
const messageSchema = new Schema({
  group: {
    type: mongoose.Types.ObjectId,
    ref: "Group",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  creator: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  content: {
    type: String,
    required: [true, "message should have contnet"],
  },
  likes: Number,
  comment: [
    {
      commenter: {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
      comment: String,
    },
  ],
});

const message = mongoose.model("Message", messageSchema);
module.exports = message;
