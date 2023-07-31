const { check } = require("express-validator");
const validateResult = require("../middlewares/validate.middleware");

const createMessageValidator = [
    check("content", "error en el campo content")
        .exists().withMessage("el content es obligatorio")
        .notEmpty().withMessage("content no debe estar vacio")
        .isString().withMessage("content debe ser string"),
    validateResult
    
        
]

module.exports = createMessageValidator;