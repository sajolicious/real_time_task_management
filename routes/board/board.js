const express = require('express');
const {
  createBoard,
  getAllBoards,
  getBoardByName,
  updateBoard,
  deleteBoard
} = require('../../controllers/boardController');

const router = express.Router();

// Create a new board
router.post('/add', createBoard);

// Get all boards
router.get('/', getAllBoards);

// Get a specific board by name
router.get('/:boardName', getBoardByName);

// Update a specific board
router.put('/:boardName', updateBoard);

// Delete a specific board
router.delete('/:boardName', deleteBoard);

module.exports = router;
