import { Quiz } from './quiz_class.js';
const title = document.getElementById('title');
const genre = document.getElementById('genre');
const difficulty = document.getElementById('difficulty');
const question = document.getElementById('question');
const answersArea = document.getElementById('answers');
const startButton = document.getElementById('start_button');

startButton.addEventListener('click', () => {
  startButton.hidden = true;
  fetchQuizData(1);
});

const fetchQuizData = async index => {
  title.innerText = '取得中';
  question.innerText = '少々お待ち下さい';
  try {
    const response = await fetch('quiz/api');
    const quizAPI = await response.json();
    console.log(quizAPI)
    const quiz = new Quiz(quizAPI);
    setNextQuiz(quiz, index);
  } catch (error) {
    console.log(error);
  }
};

const setNextQuiz = (quiz, index) => {
  while (answersArea.firstChild) {
    answersArea.removeChild(answersArea.firstChild);
  }
  if (index <= quiz.getNumQuizzes()) {
    makeQuiz(quiz, index);
  } else {
    finishQuiz(quiz);
  }
};

const makeQuiz = (quiz, index) => {
  title.innerText = `問題 ${index}`;
  genre.innerText = `[ジャンル] ${quiz.getQUizCategory(index)}`;
  difficulty.innerText = `[難易度] ${quiz.getQuizDifficulty(index)}`;
  question.innerText = `[クイズ] ${quiz.getQuizQuestion(index)}`;

  const choices = quiz.getChoices(index)
  choices.forEach(choice => {
    const answerElement = document.createElement('li');
    answersArea.appendChild(answerElement);

    const buttonElement = document.createElement('button');
    buttonElement.innerText = choice;
    answersArea.appendChild(buttonElement);
    buttonElement.addEventListener('click', () => {
      quiz.countCorrectAnswers(index, choice);
      index++;
      answersArea.removeChild(answersArea.firstChild);
      setNextQuiz(quiz, index);
    });
  });
};


const finishQuiz = quiz => {
  title.innerText = `あなたの正答数は${quiz.getCorrectAnswersNum()}です。`;
  genre.innerText = '';
  difficulty.innerText = '';
  question.innerText = '再チャレンジしたい場合は書きをクリック';

  const restartButton = document.createElement('button');
  restartButton.innerText = 'ホームに戻る';
  answersArea.appendChild(restartButton);
  restartButton.addEventListener('click', () => {
    location.reload();
  });
};
