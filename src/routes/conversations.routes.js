const { Router } = require("express");
const {
  createConversation,
  deleteConversation,
  getAllConversationsUsers,
  getAllConversationsParticipantsMessage,
} = require("../controllers/conversations.controllers");
const authenticate = require("../middlewares/auth.middleware");
const createConversationValidator = require("../validators/conversation.validator");

const router = Router();

// validadores
router.post("/conversations",createConversationValidator, createConversation);

router.delete("/conversations/:id", deleteConversation);

router.get("/conversations", getAllConversationsUsers);

router.get("/conversations/:id/messages", getAllConversationsParticipantsMessage);

module.exports = router;
