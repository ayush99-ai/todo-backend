const express = require("express");

const router = express.Router();

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  searchTask
} = require("../controllers/taskController");

const {
  createTaskValidation,
  validationResultHandler
} = require("../middleware/validation");

// get all tasks
router.get("/", getTasks);

// create task
router.post(
  "/",
  createTaskValidation,
  validationResultHandler,
  createTask
);

// search task
router.get("/search", searchTask);

// update task
router.put("/:id", updateTask);

// delete task
router.delete("/:id", deleteTask);

module.exports = router;