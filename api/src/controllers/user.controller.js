const {
  readJson,
} = require("../utils/index"); /* import gej oruulj ireh ene 2 ymar yalgaatai bilee? */

const login = (req, res) => {
  const { email, password } = req.body;
  const users = readJson("users.json");

  const user = users.find(
    (user) => user.eamil === email && user.password === password
  );

  if (user) {
    res.status(200).json({ message: "Loging successful" });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

const register = async (req, res) => {
  const { username, email, password } = req.body;
  const users = readJson("users.json");

  const user = users.find((user) => user.email === email);

  if (user) return res.status(400).json({ message: "User already exists" });

  const newUser = {
    id: v4(),
    username,
    email,
    password,
  };

  users.push(newUser);

  saveJson("users.json", users);

  res.json(newUser);
};

module.exports = { login, register };
