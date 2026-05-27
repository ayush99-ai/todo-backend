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
  taskValidation,
  validate
} = require("../middleware/validation");

router.get("/", getTasks);

router.post(
  "/",
  taskValidation,
  validate,
  createTask
);

router.delete("/:id", deleteTask);

router.put("/:id", updateTask);

router.get("/search", searchTask);

module.exports = router;