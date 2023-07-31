const { Router } = require("express");
const { createUser, loginUser, getUsers } = require("../controllers/users.controller");
const {
  loginUserValidator,
  registerUserValidator,
} = require("../validators/users.validators");
const authenticate = require("../middlewares/auth.middleware");

// primero importen lo nativo node
// de librerias express, express-validator

// importo mis archivos, modulos

const router = Router();

// ? que campos debo validar
// ? que deberia validar por cada campo

router.post("/users", registerUserValidator, createUser); //

router.post("/login", loginUserValidator, loginUser);

router.get("/users" , getUsers);

// proteger este endpoint - ruta
router.get("/users", authenticate, (req, res) => {
  console.log(req);
  res.send("users");
});

module.exports = router;


