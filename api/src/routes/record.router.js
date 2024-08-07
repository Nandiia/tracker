const { Router } = require("express");

const {
  getRecords,
  createRecord,
} = require("../controllers/record.controller");

const recordRouter = Router();
recordRouter.get("/", getRecords).post("/", createRecord);

module.exports = { recordRouter };
