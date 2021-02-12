global.fetch = require('node-fetch');
const quizApi = "https://opentdb.com/api.php?amount=10";


module.exports = {
  getQuiz: async () => {
    let i;
    try {
      const response = await fetch(quizApi);
      const quizAPI = await response.json();
      
      const shuffleArray = ([...array]) => {
        for (let i = array.length - 1; i >= 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };
      const buildAnswers = (quizAPI, i) => {
        answers = [quizAPI.results[i - 1].correct_answer, [quizAPI.results[i - 1].incorrect_answers]];
        return shuffleArray(answers);
      };
      
      for (i = 1; i <= quizAPI.results.length; i++) {
        const answers = buildAnswers(quizAPI, i);
        quizAPI.results[i - 1].push(answers);
        console.log(quizAPI);
      }
       return quizAPI;
    } catch (error) {
      console.log(error);
    } 
  },
}