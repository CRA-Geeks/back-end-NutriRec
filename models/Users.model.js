const mongoose = require("mongoose");

const users = new mongoose.Schema({
  email: { type: String, unique: true, dropDups: true },
  userName: String,
  tags: Array,
  favorite: Array,
});

module.exports = mongoose.model("user", users);
