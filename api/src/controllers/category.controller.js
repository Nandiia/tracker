const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");
const { db } = require("../database");
const { categories, users } = require("../database/schema");
const { eq } = require("drizzle-orm");

// const getAllCategories = async (_, res) => {
//   try {
//     /* categories.json -iin datan dotorh category-g awch bn
//     const filePath = path.join(__dirname, "..", "data", "categories.json");
//     const rawData = fs.readFileSync(filePath);
//     const accounts = JSON.parse(rawData);
//     res.json(accounts); */

//     /* database-s datagaa awch bn */
//     const category = await db.query.categories.findMany();
//     res.josn(category);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

const getCategories = async (req, res) => {
  const category = await db.query.categories.findMany({
    where: eq(categories.userId, req.user.id),
  });
  res.json(category);
};

const getCategoryById = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "categories.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);

    const categoryId = await db.query.categories.findMany();

    const id = req.params.id;
    console.log(id);

    const category = accounts.find((el) => el.id === id);
    console.log(category);

    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/* categories.json-d data uusgej bn 
const createcategory = async (req, res) => {
  // console.log(req.body, "gggggnp");
  try {
    const filePath = path.join(__dirname, "..", "data", "categories.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);
    const newAccount = { ...req.body, id: v4() };

    accounts.push(newAccount);
    console.log(newAccount);

    fs.writeFileSync(filePath, JSON.stringify(accounts));
    res.json(newAccount);

    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};*/

const createCategory = async (req, res) => {
  const { categoryName, categoryIcon, categoryColor } = req.body;
  const userId = req.user.id;

  const category = await db
    .insert(categories)
    .values({ categoryName, categoryIcon, categoryColor, userId })
    .returning();
  res.json(category);
};

module.exports = { getCategories, createCategory, getCategoryById };
