const taskService = require("../services/taskServices");

// get all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// create task
const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// update task
const updateTask = async (req, res) => {
  try {
    const task = await taskService.updateTask(req.params.id, req.body);
    res.json(task);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// delete task
const deleteTask = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id);
    res.json({ message: "Task removed" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// search task
const searchTask = async (req, res) => {
  try {
    const q = req.query.q || "";
    const tasks = await taskService.searchTasks(q);
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Search failed" });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  searchTask
};