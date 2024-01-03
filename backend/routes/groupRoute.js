const express = require("express");
const groupController = require("../controllers/groupController");

const router = express.Router();

router
  .route("/")
  .get(groupController.getGroupDetail)
  .post(groupController.createGroup);
router
  .route("/:id")
  .patch(groupController.updateGroup)
  .delete(groupController.deleteGroup);

module.exports = router;
