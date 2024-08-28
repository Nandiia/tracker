const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const { accountRouter } = require("./routes/account.route");
const { categoryRouter } = require("./routes/category.route");
const { recordRouter } = require("./routes/record.router");
const { authRouter } = require("./routes/auth.router");
const { userRouter } = require("./routes/user.router");
const { authMiddleware } = require("./middleware/authMiddleware");

const port = 3010;
const app = express();

app.use(
  express.json()
); /* бүх хүсэлтийн өмнө бодинуудыг жсон болгож хувиргаарай гэсэн миддл вэйр дамжуулаад өгчлөө гэсэн үг.  */

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(authMiddleware);
app.use("/accounts", accountRouter);
app.use("/categories", categoryRouter);
app.use("/records", recordRouter);

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
