const title = document.getElementById('title');
const genre = document.getElementById('genre');
const difficulty = document.getElementById('difficulty');
const question = document.getElementById('question');
const answersArea = document.getElementById('answers');
const startButton = document.getElementById('start_button');

startButton.addEventListener('click', () => {
  startButton.hidden = true;
  title.innerText = "取得中";
  question.innerText = "少々お待ち下さい";
  const xhr = new XMLHttpRequest();
  xhr.open('GET', '/quiz/api', true);
  req.send(null);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // setNextQuiz(`${quizData}`, index);
      console.log(`${quizData}`);
    }
  };
});

// const setNextQuiz = (quiz, index) => {
//   while (answersArea.firstChild) {
//     answersArea.removeChild(answersArea.firstChild);
//   }
//   if (index <= quiz.getNumQuizzes()) {
//     makeQuiz(quiz, index);
//   } else {
//     finishQuiz(quiz);
//   }
// };

// const makeQuiz = (quiz, index) => {
//   title.innerText = `問題 ${index}`;
//   genre.innerText = `[ジャンル] ${quiz.getQUizCategory(index)}`;
//   difficulty.innerText = `[難易度] ${quiz.getQuizDifficulty(index)}`;
//   question.innerText = `[クイズ] ${quiz.getQuizQuestion(index)}`;

//   const answers = buildAnswers(quiz, index);

//   answers.forEach(answer => {
//     const answerElement = document.createElement('li');
//     answersArea.appendChild(answerElement);

//     const buttonElement = document.createElement('button');
//     buttonElement.innerText = answer;
//     answersArea.appendChild(buttonElement);
//     buttonElement.addEventListener('click', () => {
//       quiz.countCorrectAnswers(index, answer);
//       index++;
//       answersArea.removeChild(answersArea.firstChild);
//       setNextQuiz(quiz, index);
//     });
//   });
// };

// const shuffleArray = ([...array]) => {
//   for (let i = array.length - 1; i >= 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

// const buildAnswers = (quiz, index) => {
//   const answers = [
//     quiz.getCorrectAnswer(index),
//     ...quiz.getIncorrectAnswers(index)
//   ];
//   return shuffleArray(answers);
// }


// const finishQuiz = (quiz) => {
//   title.innerText = `あなたの正答数は${quiz.getCorrectAnswersNum()}です。`;
//   genre.innerText = '';
//   difficulty.innerText = '';
//   question.innerText = '再チャレンジしたい場合は書きをクリック';

//   const restartButton = document.createElement('button');
//   restartButton.innerText = 'ホームに戻る';
//   answersArea.appendChild(restartButton);
//   restartButton.addEventListener('click', () => {
//     location.reload();
//   });
// }
