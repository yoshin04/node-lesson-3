const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/', quizController.index);
router.post('/', quizController.create);
module.exports = router;