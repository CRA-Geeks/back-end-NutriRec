const mongoose = require("mongoose");
const users = require("../models/Users.model");

const createUser = (req, res) => {
  let user = new users({
    email: req.body.email,
    userName: req.body.userName,
    tags: req.body.tags,
  });
  user
    .save()
    .then(() => {
      users.find({}).then((items) => {
        res.status(200).json(items);
      });
    })
    .catch((err) => {
      res.status(401).json({ message: "Dublictae" + err });
    });
};

const getUser = (req, res) => {
  users.findOne({ email: req.params.email }, (err, user) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(user);
    }
  });
};

const updateUser = (req, res) => {
  users
    .findOneAndUpdate(
      { email: req.params.email },
      { $set: req.body },
      { new: true }
    )
    .then((item) => {
      res.status(200).send(item);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
};

module.exports = {
  createUser,
  getUser,
  updateUser,
};
