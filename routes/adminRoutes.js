const { Router } = require("express");
const User = require("../models/User");
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/adminController");

const router = Router();

router.get("/", (req, res) => {
  res.render("admin");
});
router.get("/users", getAllUsers);
router.post("/users", createUser);
router.put("/users/:email", updateUser);
router.delete("/users/:email", deleteUser);

module.exports = router;
