const Task = require("../models/Task");

// get all tasks from DB
const getAllTasks = async () => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  return tasks;
};

// add new task
const createTask = async (data) => {
  if (!data.title) {
    throw new Error("Title is missing");
  }

  const task = await Task.create({
    title: data.title
  });

  return task;
};

// update task by id
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

// search tasks
const searchTasks = async (text) => {
  const tasks = await Task.find({
    title: {
      $regex: text,
      $options: "i"
    }
  });

  return tasks;
};

module.exports = {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  searchTasks
};