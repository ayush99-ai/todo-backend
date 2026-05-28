const Task = require("../models/Task");

// get all tasks
const getAllTasks = async () => {
  return await Task.find().sort({ createdAt: -1 });
};

// create task
const createTask = async (data) => {
  if (!data.title) {
    throw new Error("Title is required");
  }

  return await Task.create({
    title: data.title
  });
};

// update task
const updateTask = async (id, data) => {
  const task = await Task.findByIdAndUpdate(id, data, { new: true });

  if (!task) {
    throw new Error("Task not found");
  }

  return task;
};

// delete task
const deleteTask = async (id) => {
  const task = await Task.findByIdAndDelete(id);

  if (!task) {
    throw new Error("Task not found");
  }

  return task;
};

// search task
const searchTasks = async (q) => {
  return await Task.find({
    title: { $regex: q, $options: "i" }
  });
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  searchTasks
};