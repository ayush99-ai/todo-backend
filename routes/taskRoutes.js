const express = require("express");
const router = express.Router();

const {getTasks,createTask,updateTask,deleteTask,searchTask} = require("../controllers/taskController");

const {createTaskValidation,validationResultHandler,idValidation} = require("../middleware/validation");

// GET all tasks
router.get("/", getTasks);

// CREATE task
router.post("/", createTaskValidation, validationResultHandler, createTask);

// SEARCH
router.get("/search", searchTask);

// UPDATE task
router.put("/:id", idValidation, updateTask);

// DELETE task
router.delete("/:id", idValidation, deleteTask);

module.exports = router;