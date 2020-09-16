const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')


const shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
  console.log('Started')
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {

}

function selectAnswer() {

}

const questions = [
  {
    question: 'How to you get an integer without any decimals?',
    answers: [
      { text: 'Math.floor', correct: true },
      {text: 'Math.random', correct: false}
    ]
  }
]