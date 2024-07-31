const express = require("express");
const cors = require("cors");

const { accountRouter } = require("./routes/account.route");

const port = 3005;
const app = express();

app.use(
  express.json()
); /* бүх хүсэлтийн өмнө бодинуудыг жсон болгож хувиргаарай гэсэн миддл вэйр дамжуулаад өгчлөө гэсэн үг.  */

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/accounts", accountRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
