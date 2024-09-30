const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const {
  getTaksAPI,
  getTaskByIdAPI,
  updateTaksAPI,
  addTaskAPI,
  deleteTaksAPI,
} = require("./controllers/task");
require("dotenv").config();

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.log("error connecting to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.static("dist"));
app.use(express.json());

app.get("/", getTaksAPI);
app.post("/", addTaskAPI);
app.get("/:id", getTaskByIdAPI);
app.post("/:id", updateTaksAPI);
app.delete("/:id", deleteTaksAPI);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening to PORT : ${PORT}`);
});
