const mongose = require("mongoose");
const { Schema } = mongose;

const userSchema = new Schema({
  name: String,
  userName: {
    type: String,
    required: [true, "User should have username"],
    unique: true,
  },
  phoneNumber: String,
  password: String,
  photo: String,
});

const User = mongose.model("User", userSchema);
module.exports = User;
