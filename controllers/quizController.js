const Quiz = require('../models/quizModel');
const quizApi = "https://opentdb.com/api.php?amount=10";
module.exports = {
  index: (req, res) => {
    res.render('quiz/index');
  },
  create: async (index, res, next) => {
    try {
      const response = await fetch(quizApi);
      const quizData = await response.json();
      const quiz = new Quiz(quizData);
      res.render('quiz/index', {
        quiz: quiz
      });
    } catch (err) {
      console.log(err);
    }
  }
}