const { Router } = require("express");

const {
  getRecords,
  createRecord,
  deleteRecord,
  getRecord,
  createPost,
  getPost,
} = require("../controllers/record.controller");

const recordRouter = Router();
recordRouter
  .get("/getRecord", getRecord)
  .post("/createRecord", createRecord)
  .get("/:id", getRecord)
  .delete("/:id", deleteRecord);

module.exports = { recordRouter };
