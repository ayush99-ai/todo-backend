const Task = require("../models/Task");

// get all tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
};

// create task
const createTask = async (req, res) => {
  try {
    const task = await Task.create({
      title: req.body.title,
      status: req.body.status || "pending"
    });

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Error creating task" });
  }
};

// update task (title + status)
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};

// delete task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: "Delete failed" });
  }
};

// search task
const searchTask = async (req, res) => {
  const q = req.query.q || "";

  const tasks = await Task.find({
    title: { $regex: q, $options: "i" }
  });

  res.json(tasks);
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  searchTask
};