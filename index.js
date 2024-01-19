const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const taskRouter = require("./routes/taskRouter");

app.use(express.json());
app.use(cors());
app.use("/api/tasks", taskRouter);

app.use((req, res) => {
  res.send("error");
});

const server = async (req, res) => {
  try {
    await mongoose.connect(process.env.URL, { dbName: "taskServer" });
    app.listen(PORT, () => {
      console.log("working");
    });
  } catch (error) {
    console.log(error);
  }
};

server();
