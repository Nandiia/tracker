const fs = require("fs");
const path = require("path");
const { v4 } = require("uuid");

const getAllCategories = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "categories.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);
    res.json(accounts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getCategoryById = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "categories.json");
    const rawData = fs.readFileSync(filePath);
    const accounts = JSON.parse(rawData);

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
const createcategory = async (req, res) => {
  console.log(req.body, "gggggnp");
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
};

module.exports = { getAllCategories, createcategory, getCategoryById };
