const taskService = require("../services/taskServices");

// getting all tasks from database
const getTasks = async (req, res) => {

  try {

    const tasks = await taskService.getAllTasks();

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: "Unable to fetch tasks"
    });

  }
};

// creating new task
const createTask = async (req, res) => {

  try {

    const task = await taskService.createTask(req.body);

    res.status(201).json(task);

  } catch (error) {

    // if title is missing
    if (error.message.includes("required")) {

      return res.status(400).json({
        message: error.message
      });

    }

    res.status(500).json({
      message: "Task could not be created"
    });

  }
};

// updating existing task
const updateTask = async (req, res) => {

  try {

    const updatedTask = await taskService.updateTask(
      req.params.id,
      req.body
    );

    res.status(200).json(updatedTask);

  } catch (error) {

    // invalid id
    if (error.message === "Invalid task id") {

      return res.status(400).json({
        message: "Please enter valid task id"
      });

    }

    // task not found
    if (error.message === "Task not found") {

      return res.status(404).json({
        message: "Task not found"
      });

    }

    res.status(500).json({
      message: "Could not update task"
    });

  }
};

// deleting task
const deleteTask = async (req, res) => {

  try {

    await taskService.deleteTask(req.params.id);

    res.status(200).json({
      message: "Task deleted successfully"
    });

  } catch (error) {

    if (error.message === "Task not found") {

      return res.status(404).json({
        message: "Task not found"
      });

    }

    res.status(500).json({
      message: "Could not delete task"
    });

  }
};

// searching tasks
const searchTask = async (req, res) => {

  try {

    const text = req.query.q || "";

    const tasks = await taskService.searchTasks(text);

    res.status(200).json(tasks);

  } catch (error) {

    res.status(500).json({
      message: "Search failed"
    });

  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  searchTask
};