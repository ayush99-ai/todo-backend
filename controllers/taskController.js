const Task = require('../models/Task');


// Create Task
const createTask = async (req, res) => {
  try {
    const { title, description, status, dueDate } = req.body;

    if (!title) {
      return res.status(400).json({
        message: 'Title is required'
      });
    }

    const newTask = await Task.create({
      title,
      description,
      status,
      dueDate
    });

    res.status(201).json({
      message: 'Task created successfully',
      task: newTask
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};


// Get All Tasks
const getTasks = async (req, res) => {
  try {
    const { status } = req.query;

    let tasks;

    if (status) {
      tasks = await Task.find({ status });
    } else {
      tasks = await Task.find();
    }

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};


// Get Single Task
const getSingleTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: 'Task not found'
      });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};


// Update Task
const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );

    if (!updatedTask) {
      return res.status(404).json({
        message: 'Task not found'
      });
    }

    res.json({
      message: 'Task updated successfully',
      task: updatedTask
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};


// Delete Task
const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).json({
        message: 'Task not found'
      });
    }

    res.json({
      message: 'Task deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};


// Search Task
const searchTask = async (req, res) => {
  try {
    const { title } = req.query;

    const tasks = await Task.find({
      title: {
        $regex: title,
        $options: 'i'
      }
    });

    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};


// Update Status
const updateStatus = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: 'Task not found'
      });
    }

    task.status = req.body.status;

    await task.save();

    res.json({
      message: 'Task status updated',
      task
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};

module.exports = {
  createTask,
  getTasks,
  getSingleTask,
  updateTask,
  deleteTask,
  searchTask,
  updateStatus
};
