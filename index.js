const express = require("express");

const { newAction } = require("./data/projectdata/actions");
const projects = require("./data/routes/projectroutes");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());

app.use("/api", projects);
app.post("/api/action", newAction);

app.get("*", (req, res) => {
  res.send("Hello there");
});

app.listen(5000, () => console.log("API running on port 5000"));
