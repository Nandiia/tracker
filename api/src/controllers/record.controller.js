const fs = require("fs");
const path = require("path");

const createRecord = async (req, res) => {
  try {
    const filePath = path.join(__dirname, "..", "data", "records.json");
    const rawData = fs.readFileSync(filePath);
    const records = JSON.parse(rawData);

    const newRecord = req.body;
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

module.exports = { createRecord, getRecords };
