const express = require("express");

const router = express.Router();

const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  searchTask
} = require("../controllers/taskController");

const {
  createTaskValidation,
  updateTaskValidation,
  idValidation,
  validate
} = require("../middleware/validation");

router.get("/", getTasks);

router.get("/search", searchTask);

router.post(
  "/",
  createTaskValidation,
  validate,
  createTask
);

router.put(
  "/:id",
  idValidation,
  updateTaskValidation,
  validate,
  updateTask
);

router.delete(
  "/:id",
  idValidation,
  validate,
  deleteTask
);

module.exports = router;