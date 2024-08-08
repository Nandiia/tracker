const { log } = require("console");
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const createRecord = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "records.json");
    const rawData = fs.readFileSync(filePath);
    const records = JSON.parse(rawData);

    const newRecord = { ...req.body, id: uuidv4() };
    records.push(newRecord);
    console.log(newRecord);

    fs.writeFileSync(filePath, JSON.stringify(records));
    res.json(newRecord);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getRecords = (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "records.json");
    const rawData = fs.readFileSync(filePath);
    const records = JSON.parse(rawData);
    console.log(rawData);
    res.json(records);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getRecord = (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "records.json");
    const rawData = fs.readFileSync(filePath);
    const records = JSON.parse(rawData);

    const recordId = req.params.id;
    const record = records.find((el) => el.id === recordId);
    console.log(record);
    res.json(record);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteRecord = (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "records.json");
    const rawData = fs.readFileSync(filePath);
    const record = JSON.parse(rawData);

    const recordId = req.params.id;
    const updatedRecords = record.filter((item) => item.id !== recordId);

    fs.writeFileSync(filePath, JSON.stringify(updatedRecords));
    res.status(200).send({ message: "Category deleted successfully" });
  } catch (error) {
    // const filePath = path.join(__dirname, "..", "data", "records.json");
    // const rawData = fs.readFile(filePath);
    // const record = JSON.parse(rawData);

    const recordId = req.params.id;
    // console.log(record);
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createRecord, getRecords, deleteRecord, getRecord };
