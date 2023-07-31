const { check } = require("express-validator");
const validateResult = require("../middlewares/validate.middleware");

const createConversationValidator = [
    check("title", "error en el campo title")
        .exists().withMessage("el title es obligatorio")
        .notEmpty().withMessage("title no debe estar vacio")
        .isString().withMessage("title debe ser string"),
    validateResult
    
        
]

module.exports = createConversationValidator;