const Task = require("../models/Task");

// get all tasks
const getAllTasks = async () => {
  return await Task.find().sort({ createdAt: -1 });
};

// create task
const addTask = async (data) => {
  return await Task.create(data);
};

// update task
const updateTaskById = async (id, data) => {
  return await Task.findByIdAndUpdate(id, data, {
    new: true
  });
};

// delete task
const deleteTaskById = async (id) => {
  return await Task.findByIdAndDelete(id);
};

// search task
const searchTasks = async (text) => {
  return await Task.find({
    title: {
      $regex: text,
      $options: "i"
    }
  });
};

module.exports = {
  getAllTasks,
  addTask,
  updateTaskById,
  deleteTaskById,
  searchTasks
};