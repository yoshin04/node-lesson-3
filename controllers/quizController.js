const Quiz = require('../models/quizModel');
const httpStatus = require('http-status-codes');
module.exports = {
  index: (req, res) => {
    res.render('quiz/index');
  },
  getQuizData: async (req, res, next) => {
    try {
      const quizData = await Quiz.getQuiz();
      return res.json({
        status: httpStatus.OK,
        quizData,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
