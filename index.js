const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const courses = require("./data/courses.json");
const details = require("./data/details.json");

app.get("/", (req, res) => {
  res.send("api is running ");
});

app.get("/courses", (req, res) => {
  res.send(courses);
});
app.get("/courses/:id", (req, res) => {
  const id = req.params.id;
  const detail = details.find((d) => d.id === id);
  res.send(detail);
});

app.listen(port, () => {
  console.log("its working ");
});
