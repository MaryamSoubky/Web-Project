const User = require("../models/User");

function createUser(req, res) {
  User.create({
    first: req.body.first,
    last: req.body.last,
    email: req.body.email,
    password: req.body.password,
    Cpassword: req.body.Cpassword,
  })
    .then((user) => {
      res.status(200).json({ user });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

function getAllUsers(req, res) {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

function updateUser(req, res) {
  User.findOne({ email: req.params.email })
    .then((user) => {
      if (user) {
        user.first = req.body.first;
        user.last = req.body.last;
        user.email = req.body.email;
      }
      user.save();
      res.status(200).json({ user });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

function deleteUser(req, res) {
  User.deleteOne({ email: req.params.email })
    .then((user) => {
      res.status(200).json({ message: "User deleted successfully" });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
}

module.exports = { createUser, getAllUsers, updateUser, deleteUser };
