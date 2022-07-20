// the list of questions
const questions = {
    questions: [
      {
          question: "The capitol of Florida is Miami.",
          answer: false
        },
        {
          question: "The capital of California is Sacramento.",
          answer: true
        },
        {
          question: "Albert Einstein is Magician",
          answer: false
        },
        {
          question: "The inventor of the first computer is Alan Turing.",
          answer: true
        },
        {
          question: "Facebook bought WhatsApp for 19 billion dollars.",
          answer: true
        },
        {
          question: "Hg is the chemical symbol of Mercury.",
          answer: true
        },
        {
          question: "Madrid is the capitol of Portugal.",
          answer: false
        },
        {
          question: "The worlds most ancient forest is in Australia.",
          answer: true
        },
        {
          question: "The highest waterfall in the world, Angel Falls, is located in Venezuela.",
          answer: true
        },
        {
          question: "There are eight planets in the solar system.",
          answer: true
        },
        {
          question: "Mercury is the second hottest planet and is closest to the sun.",
          answer: true
        },
        {
          question: "Earth is the fourth planet from the sun.",
          answer: false
        },
        {
          question: "A group of lions is called a squad.",
          answer: false
        },
        {
          question: "Uranus is known as the icy planet.",
          answer: true
        },
        {
          question: "Zurich is the largest city in Norway",
          answer: false
        },
        {
          question: "Colombia produces the most coffee in the world.",
          answer: false
        },
        {
          question: "Chile is thin but long and spans more than half of the western coast of South America.",
          answer: true
        },
        {
          question: "Jupiter is the planet with the most gravity.",
          answer: true
        },
        {
        question: "There are sixty national parks in the United States.",
        answer: false
        },
        {
          question: "The scientific name for fingerprints is dermatoglyph.",
          answer: true
        }
    ]
  }


const question = document.getElementById('question')
let score = 0
let questionIndex = 0
let lastQuestion = false

question.innerText = questions.questions[questionIndex].question

function trueButton() {
    const questionObject = questions.questions[questionIndex]
    if (questionObject && questionObject.answer == true && lastQuestion == false) {
        score += 1
    }
    nextQuestion()
}

function falseButton() {
    const questionObject = questions.questions[questionIndex]
    if (questionObject && questionObject.answer == false && lastQuestion == false) {
        score += 1
    }
    nextQuestion()
}

function nextQuestion() {
    questionIndex += 1
    if(questionIndex >= questions.questions.length) {
        lastQuestion = true
        let finalScore = ((score / questions.questions.length) * 100)
        const listOutScore = `Your final score is ${finalScore}%.`
        question.innerText = listOutScore
        hideTrueFalseButtons(true)
    } else {
        question.innerText = questions.questions[questionIndex].question
    }
}

function replay() {
    hideTrueFalseButtons(false)
    score = 0
    questionIndex = Math.floor(Math.random * questions[questionIndex].question.length)
    lastQuestion = false
    question.innerText = questions.questions[questionIndex].question
}

function hideTrueFalseButtons(flag) {
    const trueButton = document.getElementById('true-button')
    const falseButton = document.getElementById('false-button')
    const replayButton = document.getElementById('replay-button')

    if(flag == true) {
        replayButton.style.opacity = 1
        trueButton.style.opacity = 0
        falseButton.style.opacity = 0
    } else {
        replayButton.style.opacity = 0
        trueButton.style.opacity = 1
        falseButton.style.opacity = 1
    }
}
