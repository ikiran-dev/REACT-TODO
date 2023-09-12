const mongoose = require("mongoose");
const Todos = require("../dbTodos");

// Get todo list
const getTodos = async (req, res) => {
  try {
    const allTodos = await Todos.find({}).sort({ createdAt: -1 });
    res.status(200).send(allTodos);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Create todo
const createTodos = async (req, res) => {
  const dbTodo = req.body;
  try {
    const newTodos = await Todos.create(dbTodo);
    res.status(201).send(newTodos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// update todo
const updateTodos = async (req, res) => {
  const { id } = req.params;
  try {
    // check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No todo with that id of ${id}`);
    }
    const todoID = { _id: id };
    const update = { completed: true };
    const updateTodos = await Todos.findOneAndUpdate(todoID, update);
    if (!updateTodos) {
      return res.status(404).send(`No todo with that id of ${id}`);
    }
    res.status(200).send(updateTodos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// delete todo
const deleteTodos = async (req, res) => {
  const { id } = req.params;
  try {
    // check if id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).send(`No todo with that id of ${id}`);
    }

    const deleteTodos = await Todos.findOneAndDelete({ _id: id });

    res.status(200).send(deleteTodos);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getTodos,
  createTodos,
  updateTodos,
  deleteTodos,
};
