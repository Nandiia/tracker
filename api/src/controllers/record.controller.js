const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { db } = require("../database");
const { posts, users, records } = require("../database/schema");
const { eq } = require("drizzle-orm");

/* records.json-ruu record uusgen hiij bn */
// const createRecord = async (req, res) => {
//   try {
//     const filePath = path.join(__dirname, "..", "data", "records.json");
//     const rawData = fs.readFileSync(filePath);
//     const records = JSON.parse(rawData);

//     const newRecord = { ...req.body, id: uuidv4() };
//     records.push(newRecord);
//     console.log(newRecord);

//     fs.writeFileSync(filePath, JSON.stringify(records));
//     res.json(newRecord);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

/* database ashiglan record uusgej bn */
// const createRecord = async (req, res) => {
//   const {}
// }

/* record.josn-d baigaa data-gaa awch bn */
// const getRecords = (req, res) => {
//   try {
//     const filePath = path.join(__dirname, "..", "data", "records.json");
//     const rawData = fs.readFileSync(filePath);
//     const records = JSON.parse(rawData);
//     console.log(rawData);
//     res.json(records);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

/* record.josn dotor baigaa data-gaa hereglegchiin burtgeleer shuuj awch bn */
// const getRecord = (req, res) => {
//   try {
//     const filePath = path.join(__dirname, "..", "data", "records.json");
//     const rawData = fs.readFileSync(filePath);
//     const records = JSON.parse(rawData);

//     const recordId = req.params.id;
//     const record = records.find((el) => el.id === recordId);
//     console.log(record);
//     res.json(record);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

/* database ashiglan datagaa awch bn  */
const getRecord = async (req, res) => {
  const record = await db.query.records.findMany({
    where: eq(users.id, req.user.id),
  });

  res.json(record);
};

const createRecord = async (req, res) => {
  const { type, amount, category_id, date, time, payee, note } = req.body;
  const userId = req.user.id;

  const record = await db
    .insert(records)
    .values({ type, category_id, date, time, payee, note, userId })
    .returning();

  res.json(record);
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

//DataBase test

// const getPost = async (req, res) => {
//   const post = await db.query.posts.findMany({
//     where: eq(users.id, req.user.id),
//   });
//   console.log(post, "===");

//   res.json(post);
// };

// const createPost = async (req, res) => {
//   const userId = req.user.userId;
//   const { names } = req.body;
//   // console.log("names", req.body);

//   const post = await db
//     .insert(posts)
//     .values({ name: names, userId: userId })
//     .returning();

//   res.json(post);
// };

module.exports = {
  deleteRecord,
  getRecord,
  createRecord,
};
