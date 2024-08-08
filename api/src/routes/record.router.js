const { Router } = require("express");

const {
  getRecords,
  createRecord,
  deleteRecord,
  getRecord,
} = require("../controllers/record.controller");

const recordRouter = Router();
recordRouter
  .get("/", getRecords)
  .get("/:id", getRecord)
  .post("/", createRecord)
  .delete("/:id", deleteRecord);

module.exports = { recordRouter };
