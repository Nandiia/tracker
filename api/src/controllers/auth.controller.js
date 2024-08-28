const {
  readJson,
} = require("../utils/index"); /* import gej oruulj ireh ene 2 ymar yalgaatai bilee? */

const path = require("path");
const fs = require("fs");
const { v4 } = require("uuid");
const jwt = require("jsonwebtoken");
const { db } = require("../database/index");
const { users } = require("../database/schema");

//Local .json

// const login = (req, res) => {
//   const { email, password } = req.body;
//   const users = readJson("users.json");

//   const user = users.find(
//     (user) => user.eamil === email && user.password === password
//   );

//   if (user) {
//     res.status(200).json({ message: "Loging successful" });
//   } else {
//     res.status(401).json({ message: "Invalid credentials" });
//   }
// };

const login = async (req, res) => {
  const { email, password } = req.body;

  /* js */
  // const filePath = path.join(__dirname, "..", "data", "users.json");
  // const rawData = fs.readFileSync(filePath);
  // const users = JSON.parse(rawData);

  // const user = users.find(
  //   (user) => user.email === email && user.password === password
  // );

  // if (!user) return res.status(401).json({ message: "Invalid credentials" });

  /* database-s data-gaa duudaj bn*/
  const users = await db.query.users.findMany({});

  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    {
      username: user.username,
      email: user.email,
      id: user.id,
    },
    process.env.JWT_SECRET
  );

  res.json({
    token,
    user: {
      username: user.username,
      email: user.email,
      id: user.id,
    },
  });
};

// const register = async (req, res) => {
//   const { username, email, password } = req.body;

//   const filePath = path.join(__dirname, "..", "data", "users.json");
//   const rawData = fs.readFileSync(filePath);
//   const users = JSON.parse(rawData);

//   const user = users.find((user) => user.email === email);

//   if (user) return res.status(400).json({ message: "User already exists" });

//   const newUser = {
//     id: v4(),
//     username,
//     email,
//     password,
//   };

//   users.push(newUser);

//   fs.writeFileSync(filePath, JSON.stringify(users));

//   res.json(newUser);
// };

//DataBase

const getUsers = async (_, res) => {
  const users = await db.query.users.findMany({
    with: {
      categories: true,
    },
  });

  res.json(users);
};

const createUser = async (req, res) => {
  const { username, email, password, userId } = req.body;
  const user = await db
    .insert(users)
    .values({
      username,
      email,
      password,
      userId,
    })
    .returning();

  res.json(user);
};

const getPost = async (_, res) => {
  const post = await db.query.posts.findMany();

  res.json(post);
};

// const getCategories = async (_, res) => {
//   const category = await db.query.categories.findMany();
//   res.json(category);
// };
module.exports = { login, getUsers, createUser, getPost };
