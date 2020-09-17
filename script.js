const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}


function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if(correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'How do you get an integer without any decimals?',
    answers: [
      { text: 'Math.floor', correct: true },
      { text: 'Math.random', correct: false },
      { text: 'Math.round', correct: false },
      { text: 'Math.int', correct: false }

    ]
  },
  {
    question: 'Which of the following is NOT a JavaScript type?',
    answers: [
      { text: 'true', correct: true },
      { text: 'Number', correct: false },
      { text: 'String', correct: false },
      { text: 'Boolean', correct: false }
    ]
  },
  {
    question: 'How do you create a multi line comment in JavaScript?',
    answers: [
      { text: '//This is a comment', correct: false },
      { text: '*/This is a comment/*', correct: false },
      { text: '/*This is a comment*/', correct: true },
      { text: '<!--This is a comment-->', correct: false }
    ]
  },
  {
    question: 'Which of these is NOT a looping structure in Javascript',
    answers: [
      { text: 'if', correct: true },
      { text: 'for', correct: false },
      { text: 'while', correct: false },
      { text: 'do-while', correct: false }
    ]
  },
  {
    question: 'Which of the following is NOT a type of pop up box available in JavaScript?',
    answers: [
      { text: 'Alert', correct: false },
      { text: 'Confirm', correct: false },
      { text: 'Question', correct: true },
      { text: 'Prompt', correct: false }
    ]
  },
  {
    question: 'Which of the following is NOT a JavaScript method?',
    answers: [
      { text: 'unshift()', correct: false },
      { text: 'toUpperCase()', correct: false },
      { text: 'lastString()', correct: true },
      { text: 'indexOf()', correct: false }
    ]
  },
  {
    question: 'Which of the following canNOT be done with client-side JavaScript?',
    answers: [
      { text: 'Validating a form', correct: false },
      { text: 'Storing the forms contents to a database file on the server', correct: true },
      { text: 'Sending a forms contents by email', correct: false },
      { text: 'None of the above', correct: false }
    ]
  }
]