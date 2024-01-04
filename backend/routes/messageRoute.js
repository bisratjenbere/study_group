const express = require("express");
const messageController = require("../controllers/messageController");

const router = express.Router();

router.route("/").post(messageController.createMessage);

router
  .route("/:id")
  .patch(messageController.updateMessage)
  .delete(messageController.deleteMessage)
  .get(messageController.getMessageByGroupID)
  .post(messageController.createMessages);

module.exports = router;
