const { Router } = require("express");

const {
  getAllCategories,
  createcategory,
  getCategoryById,
} = require("../controllers/category.controller");

const categoryRouter = Router();

categoryRouter
  .get("/", getAllCategories)
  .post("/", createcategory)
  .get("/:id", getCategoryById);

module.exports = { categoryRouter };
