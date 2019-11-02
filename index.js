const express = require("express");

const actions = require("./data/routes/actionRoutes");
const projects = require("./data/routes/projectroutes");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/api", projects);
app.use("/api", actions);

app.get("*", (req, res) => {
  res.send("Hello there");
});

app.listen(5000, () => console.log("API running on port 5000"));
