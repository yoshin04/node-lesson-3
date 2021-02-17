global.fetch = require('node-fetch');
const quizApi = 'https://opentdb.com/api.php?amount=10';

module.exports = {
  getQuiz: async () => {
    const results = [];
    try {
      const response = await fetch(quizApi);
      const quizAPI = await response.json();
      quizAPI.results.forEach(result => {
        const shuffleArray = ([...array]) => {
          for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
        const buildAnswers = result => {
          const answers = [result.correct_answer, ...result.incorrect_answers];
          return shuffleArray(answers);
        };
        const answers = buildAnswers(result);
        const quizData = {
          category: result.category,
          type: result.type,
          difficulty: result.difficulty,
          question: result.question,
          correct_answer: result.correct_answer,
          incorrect_answers: result.incorrect_answers,
          choices: answers,
        };
        results.push(quizData);
      });
      return results;
    } catch (error) {
      console.log(error);
    }
  },
};
