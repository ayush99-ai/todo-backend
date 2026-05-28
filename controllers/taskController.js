const taskService = require("../services/taskServices");

// get tasks
const getTasks = async (req, res) => {
  const tasks = await taskService.getAllTasks();
  res.json(tasks);
};

// create task
const createTask = async (req, res) => {
  try {
    const task = await taskService.addTask({
      title: req.body.title,
      status: req.body.status
    });

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: "Could not create task"
    });
  }
};

// update task
const updateTask = async (req, res) => {
  try {
    const updatedTask =
      await taskService.updateTaskById(
        req.params.id,
        req.body
      );

    if (!updatedTask) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.json(updatedTask);

  } catch (error) {
    res.status(500).json({
      message: "Update failed"
    });
  }
};

// delete task
const deleteTask = async (req, res) => {
  try {
    const deletedTask =
      await taskService.deleteTaskById(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.json({
      message: "Task deleted"
    });

  } catch (error) {
    res.status(500).json({
      message: "Delete failed"
    });
  }
};

// search task
const searchTask = async (req, res) => {
  const text = req.query.q || "";

  const tasks = await taskService.searchTasks(text);

  res.json(tasks);
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  searchTask
};