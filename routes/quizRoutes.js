const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');

router.get('/', quizController.index);
router.get('/api', quizController.getQuizData);
module.exports = router;
//test