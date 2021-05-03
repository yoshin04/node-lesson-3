class Quiz {
  constructor(quizAPI) {
    this._quizzes = quizAPI.quizData;
    this._correctAnswersNum = 0;
  }

  getQUizCategory(index) {
    return this._quizzes[index - 1].category;
  }

  getQuizDifficulty(index) {
    return this._quizzes[index - 1].difficulty;
  }

  getQuizQuestion(index) {
    return this._quizzes[index - 1].question;
  }

  getNumQuizzes() {
    return this._quizzes.length;
  }

  getCorrectAnswer(index) {
    return this._quizzes[index - 1].correct_answer;
  }

  getIncorrectAnswers(index) {
    return this._quizzes[index - 1].incorrect_answers;
  }

  getChoices(index) {
    return this._quizzes[index - 1].choices;
  }

  countCorrectAnswers(index, answer) {
    const correctAnswer = this._quizzes[index - 1].correct_answer;
    if (answer === correctAnswer) {
      return this._correctAnswersNum++;
    }
  }

  getCorrectAnswersNum() {
    return this._correctAnswersNum;
  }
}
export { Quiz } 