const express = require("express");
const mongoose = require("mongoose");
const Cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const {
  getTodos,
  createTodos,
  updateTodos,
  deleteTodos,
} = require("./controllers/todoController");

// App Config
const app = express();

const port = process.env.PORT || 8000;

const connection_url = process.env.MONGO_URI;
// Middlewares

// convert to json
app.use(express.json());

// cors
app.use(Cors());

// DB Config
mongoose
  .connect(connection_url)
  .then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });

// API Endpoints

// Get todo list
app.get("/todos", getTodos);

// Create todo
app.post("/todos", createTodos);
// update todo
app.put("/todos/:id", updateTodos);
// delete todo
app.delete("/todos/:id", deleteTodos);
// Listener
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});
