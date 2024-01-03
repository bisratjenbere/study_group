const mongoose = require("mongoose");
const { Schema } = mongoose;

const groupSchema = new Schema({
  name: String,

  subject: String,
  photo: String,
  admin: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const Group = mongoose.model("Group", groupSchema);
module.exports = Group;
