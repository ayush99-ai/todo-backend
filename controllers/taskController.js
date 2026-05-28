const taskService = require("../services/taskService");
// GET all tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getTasks();
    res.json(tasks);
  } catch (err) {
    console.log("Error getting tasks:", err.message);
    res.status(500).json({ message: "Cant get tasks" });
  }
};
// CREATE task
const createTask = async (req, res) => {
  try {
    const task = await taskService.createTask(req.body);
    res.json(task);
  } catch (err) {
    console.log("Create error:", err.message);
    res.status(500).json({ message: "Cant create task" });
  }
};
// UPDATE task
const updateTask = async (req, res) => {
  try {
    const updated = await taskService.updateTask(req.params.id, req.body);
    if (!updated) {
           return res.status(404).json({ message: "Task not found" });
  }

    res.json(updated);
  } catch (err) {
    console.log("Update error:", err.message);
    res.status(500).json({ message: "Cant update task" });
  }
};

// DELETE task
const deleteTask = async (req, res) => {
  try {
    const deleted = await taskService.deleteTask(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (err) {
    console.log("Delete error:", err.message);
    res.status(500).json({ message: "Cant delete task" });
  }
};

// SEARCH task
const searchTask = async (req, res) => {
  try {
    const q = req.query.q || "";
    const tasks = await taskService.searchTask(q);
    res.json(tasks);
  } catch (err) {
    console.log("Search error:", err.message);
    res.status(500).json({ message: "Search failed" });
  }
};
module.exports = {getTasks,createTask,updateTask,deleteTask,searchTask};