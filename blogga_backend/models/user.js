var mongoose = require("mongoose"),
  mnLocal = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
  username: String,
  passward: String,
});

userSchema.plugin(mnLocal);

var user = new mongoose.model("user", userSchema);

module.exports = user;
