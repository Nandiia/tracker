const { Router } = require("express");

const {
  login,
  getCategories,
  getUsers,
  createUser,
} = require("../controllers/auth.controller");
const { getPost } = require("../controllers/record.controller");

const authRouter = Router();

authRouter
  .post("/login", login)
  .post("/register", createUser)
  .get("/getuser", getUsers);
// .get("/get", getCategories);

module.exports = { authRouter };
