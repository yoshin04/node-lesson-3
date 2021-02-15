const Quiz = require('../models/quizModel');
module.exports = {
  index: (req, res) => {
    res.render('quiz/index');
  },
  getQuizData: async (req, res, next) => {
    try {
      const quizData = await Quiz.getQuiz();
      return res.json({
        quizData,
      });
    } catch (err) {
      console.log(err);
    }
  },
};
