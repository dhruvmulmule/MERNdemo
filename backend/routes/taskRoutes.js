const express = require('express');
const router = express.Router();
const { getTasks, setTask, updateTask, deleteTask } = require('../controllers/taskController');
const { protect } = require('../middleware/authMiddleware');
const { set } = require('mongoose');

/* router.get('/', (req, res) => {
    res.status(200).json({ message: `Get All tasks` });
}) */

router.get('/', protect, getTasks);

router.post('/', protect, setTask);

router.put('/:id', protect, updateTask);

router.delete('/:id', protect, deleteTask);

module.exports = router;