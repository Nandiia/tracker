const { Router } = require("express");

const {
  getAllCategories,
  createcategory,
} = require("../controllers/category.controller");

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories).post("/", createcategory);

module.exports = { categoryRouter };
