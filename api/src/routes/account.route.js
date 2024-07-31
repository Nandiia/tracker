const { Router } = require("express");

const {
  getAllAccounts,
  createAccount,
} = require("../controllers/account.controller.js");

const accountRouter = Router();

accountRouter.get("/a", getAllAccounts).post("/a", createAccount);

module.exports = { accountRouter };
