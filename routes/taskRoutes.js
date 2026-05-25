const express = require('express');

const {
  createTask,
  getTasks,
  getSingleTask,
  updateTask,
  deleteTask,
  searchTask,
  updateStatus
} = require('../controllers/taskController');

const router = express.Router();

router.post('/', createTask);

router.get('/', getTasks);

router.get('/search', searchTask);

router.get('/:id', getSingleTask);

router.put('/:id', updateTask);

router.patch('/:id/status', updateStatus);

router.delete('/:id', deleteTask);

module.exports = router;