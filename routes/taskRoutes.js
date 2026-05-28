const express = require("express");
const router = express.Router();

const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  searchTask
} = require("../controllers/taskController");

router.get("/", getTasks);
router.post("/", createTask);
router.get("/search", searchTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;