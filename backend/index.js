const express = require("express");
const cors = require("cors");
const connectdatabase = require("./config/db");
require("dotenv").config();
const user = require("../backend/routes/user.route");
const message = require("../backend/routes/message.route");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", user);
app.use("/message", message);

connectdatabase();
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
