const express = require("express");
const userController = require("../controllers/userController");
const { login, signUp } = require("../controllers/authController");
const router = express.Router();
router.post("/login", login);
router.post("/signUp", signUp);

router.get("/", userController.getAllUser);

router
  .patch("/:id", userController.updateMe)
  .delete("/:id", userController.deleteUser);

module.exports = router;
