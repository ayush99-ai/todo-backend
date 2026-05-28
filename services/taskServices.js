const mongoose = require("mongoose");

const Task = require("../models/Task");

// get all tasks
module.exports.getAllTasks = async () => {

  try {

    const tasks = await Task.find();

    return tasks;

  } catch (error) {

    throw new Error("Could not fetch tasks");

  }
};

// create task
module.exports.createTask = async (data) => {

  try {

    if (!data.title) {
      throw new Error("Task title is required");
    }

    const newTask = await Task.create({
      title: data.title
    });

    return newTask;

  } catch (error) {

    throw new Error(error.message);

  }
};

// delete task
module.exports.deleteTask = async (id) => {

  try {

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid task id");
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      throw new Error("Task not found");
    }

    return deletedTask;

  } catch (error) {

    throw new Error(error.message);

  }
};

// update task
module.exports.updateTask = async (id, data) => {

  try {

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid task id");
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );

    if (!updatedTask) {
      throw new Error("Task not found");
    }

    return updatedTask;

  } catch (error) {

    throw new Error(error.message);

  }
};

// search task
module.exports.searchTasks = async (text) => {

  try {

    const tasks = await Task.find({
      title: {
        $regex: text,
        $options: "i"
      }
    });

    return tasks;const mongoose = require("mongoose");

const Task = require("../models/Task");

// get all tasks
const getAllTasks = async () => {

  try {

    const tasks = await Task.find().sort({ createdAt: -1 });

    return tasks;

  } catch (error) {

    throw new Error("Could not fetch tasks");

  }
};

// create task
const createTask = async (data) => {

  try {

    // checking title
    if (!data.title || data.title.trim() === "") {
      throw new Error("Task title is required");
    }

    // checking minimum length
    if (data.title.trim().length < 3) {
      throw new Error("Task title should have at least 3 characters");
    }

    const newTask = await Task.create({
      title: data.title
    });

    return newTask;

  } catch (error) {

    throw new Error(error.message);

  }
};

// update task
const updateTask = async (id, data) => {

  try {

    // checking id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid task id");
    }

    // if status is sent
    if (data.status) {

      const allowedStatus = ["pending", "completed"];

      if (!allowedStatus.includes(data.status)) {
        throw new Error("Invalid status value");
      }
    }

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );

    // task not found
    if (!updatedTask) {
      throw new Error("Task not found");
    }

    return updatedTask;

  } catch (error) {

    throw new Error(error.message);

  }
};

// delete task
const deleteTask = async (id) => {

  try {

    // validating id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error("Invalid task id");
    }

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      throw new Error("Task not found");
    }

    return deletedTask;

  } catch (error) {

    throw new Error(error.message);

  }
};

// search task
const searchTasks = async (text) => {

  try {

    const tasks = await Task.find({
      title: {
        $regex: text,
        $options: "i"
      }
    });

    return tasks;

  } catch (error) {

    throw new Error("Could not search tasks");

  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  searchTasks
};

  } catch (error) {

    throw new Error("Search failed");

  }
};

