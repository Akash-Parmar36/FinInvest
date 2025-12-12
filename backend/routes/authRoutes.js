const express = require("express");
const { Signup, Login } = require("../controllers/authController");
const { SignupValidation, LoginValidation } = require("../middlewares/authValidation");

const authRouter = express.Router();

authRouter.post('/register' , SignupValidation , Signup);

authRouter.post('/login' , LoginValidation, Login);

module.exports = {authRouter};