const taskService = require("../services/taskService");

// getting all tasks
const getTasks = async (req, res) => {

  try {

    const tasks = await taskService.getAllTasks();

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// creating task
const createTask = async (req, res) => {

  try {

    const task = await taskService.createTask(req.body);

    res.status(201).json(task);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }
};

// deleting task
const deleteTask = async (req, res) => {

  try {

    await taskService.deleteTask(req.params.id);

    res.json({
      message: "Task deleted"
    });

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }
};

// updating task
const updateTask = async (req, res) => {

  try {

    const updatedTask = await taskService.updateTask(
      req.params.id,
      req.body
    );

    res.json(updatedTask);

  } catch (error) {

    res.status(400).json({
      message: error.message
    });

  }
};

// searching tasks
const searchTask = async (req, res) => {

  try {

    const text = req.query.q || "";

    const tasks = await taskService.searchTasks(text);

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  searchTask
};