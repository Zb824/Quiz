const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElemnts = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let currentQuestionIndex = 0
let shuffledQuestions

// console.log(startButton)

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()

})


questionContainerElemnts.addEventListener("click", function(coun){clock})





function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  
  questionContainerElemnts.classList.remove('hide')
  setNextQuestion()
  
}

function setNextQuestion() {
  resetState() 
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
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
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}


function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1){
    nextButton.classList.remove('hide')
  } else { 
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    }
  }




function setStatusClass(element, correct){
  clearStatusClass(element)
  if (correct) {
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
    question: 'What kind of bear is best?',
    answers: [
      { text: 'Grizzly Bear', correct: false},
      {text: 'Gummy Bear', correct: false},
      {text: 'Black Bear', correct: true},
      {text: 'Polar Bear', correct: false} 
     ]
    },

    { question: 'Is identify theft a joke?',
    answers: [
        {text: 'Absolutley', correct: false},
        {text: 'It is not Jim', correct: true}, 
        {text: 'Never', correct: false},
        {text: 'Yes', correct: false} 
      ]
      },
      
      { question: 'Bears beets and...?',
      answers: [
          {text: 'Buzzsaw', correct: false},
          {text: 'Behemoth', correct: true}, 
          {text: 'Blitzkrieg', correct: false},
          {text: 'Battlestar galactia', correct: true} 
         
        ] } ]


var time_left = 90;
var clock = document.getElementById('clock');
var countdown = 
  setInterval(function(){
      time_left--;
      clock.innerHTML = time_left;
       below_10()
   
    if(time_left <= 0)
          clearInterval(countdown);
          },1000);

function below_10(){
  if(time_left <= 10)
    clock.classList.add('below10');
}
function decrement(){
  time_left = time_left - 5;
  return countdown()
}                      
                            


