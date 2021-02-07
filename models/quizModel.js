global.fetch = require('node-fetch');
const quizApi = "https://opentdb.com/api.php?amount=10";

module.exports = {
  getQuiz: async () => {
    try {
      const response = await fetch(quizApi);
       return response.json();
    } catch (error) {
      console.log(error);
    } 
  }
}