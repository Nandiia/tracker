const { Router } = require("express");

const { login, register } = require("../controllers/auth.controller");

const userRouter = Router();

userRouter.post("/login", login).post("/register", register);

module.exports = { userRouter };
