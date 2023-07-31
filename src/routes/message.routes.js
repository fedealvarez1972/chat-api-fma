const { Router} = require("express");
const { createMessage } = require("../controllers/message.controlers");
const createMessageValidator = require("../validators/message.validator");
const router = Router();

router.post('/messages', createMessageValidator, createMessage);


module.exports = router;


