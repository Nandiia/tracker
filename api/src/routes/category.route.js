const { Router } = require("express");

const {
  getCategories,
  createCategory,
  getCategoryById,
} = require("../controllers/category.controller");

const categoryRouter = Router();

categoryRouter
  .get("/", getCategories)
  .post("/", createCategory)
  .get("/:id", getCategoryById);

module.exports = { categoryRouter };
