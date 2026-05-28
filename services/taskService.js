const Task = require("../models/Task");
// get all tasks
const getTasks = async () => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  return tasks;
};
// create task
const createTask = async (data) => {
  const task = await Task.create(data);
  return task;
};
// update task
const updateTask = async (id, data) => {
  const task = await Task.findByIdAndUpdate(id, data, { new: true });
  return task;
};
// delete task
const deleteTask = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  return task;
};
// search task
const searchTask = async (query) => {
  const tasks = await Task.find({
    title: { $regex: query, $options: "i" }
  });
  return tasks;
};
module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  searchTask
};