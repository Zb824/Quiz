const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElemnts = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const clock = document.getElementById('clock');
let countdown
var time_left = 90;
let currentQuestionIndex = 0



const questions = [
  {
    question: 'Which type of bear is best?',
    answers: [
      { text: 'Grizzly Bear', correct: false},
      {text: 'Gummy Bear', correct: false},
      {text: 'Black Bear', correct: true},
      {text: 'Polar Bear', correct: false} 
     ]
  },

  { 
    question: '2 + 2?',
    answers: [
        {text: '2', correct: false},
        {text: '4', correct: true}, 
        {text: '6', correct: false},
        {text: '8', correct: false} 
      ]
  },
      
  { 
    question: 'Bears beets and...?',
    answers: [
          {text: 'Buzzsaw', correct: false},
          {text: 'Behemoth', correct: true}, 
          {text: 'Blitzkrieg', correct: false},
          {text: 'Battlestar galactia', correct: true}
        ] 
    }, 
  
    { 
      question: 'Is identify theft a joke?',
      answers: [
          {text: 'Absolutley', correct: false},
          {text: 'It is not Jim', correct: true}, 
          {text: 'Never', correct: false},
          {text: 'Yes', correct: false} 
        ]
    },
        
    

];


function startGame() {
  countdown = setInterval(function(){
    time_left--;
    clock.innerHTML = time_left;
   
    if(time_left <= 0){
      clearInterval(countdown);
    }
  }, 1000) 

  startButton.classList.add('hide')
  questionContainerElemnts.classList.remove('hide')
  showQuestion()
}


function answerIsCorrect(){


  currentQuestionIndex++;
  showQuestion()
}


function answerIsWrong(){

  currentQuestionIndex++;
  showQuestion()
}



// The job of this function is to display whatever the curr question is
function showQuestion(){
  answerButtonsElement.innerHTML = ""
  const currQuestionObj = questions[currentQuestionIndex]
  
  console.log(currentQuestionIndex,questions.length)
  
  questionElement.innerText = currQuestionObj.question
  currQuestionObj.answers.forEach( answer => {
    const button = document.createElement('button')
    button.textContent = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}



function selectAnswer(e){
  if (currentQuestionIndex > questions.length -2 ){
   answerButtonsElement.innerHTML = ""
   startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
    clearInterval (countdown)
    let initials = prompt("what are your initials?")
    let scores = JSON.parse(localStorage.getItem("scores"))||[]
    scores.push({initials,score:time_left})
    localStorage.setItem("scores",JSON.stringify(scores))
    window.location.reload()
    return
  }
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  

  if (questions.length > currentQuestionIndex + 1){
    // nextButton.classList.remove('hide')
  } else { 
  
    }
  }




function setStatusClass(element, correct){
  console.log(correct)
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    answerIsCorrect()
  } else { 
    element.classList.add('wrong')
    answerIsWrong()
    time_left -=10
  
  }
}


function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
                        
answerButtonsElement.addEventListener("click", function(event){
  if( event.target.matches("button") ){
    console.log(event.target)

  }
})




startButton.addEventListener('click', startGame)
let scores = JSON.parse(localStorage.getItem("scores"))||[]
for (let i = 0; i <scores.length; i++){
  let score = document.createElement("p")
  score.innerText=scores[i].initials+" "+ scores[i].score
  document.getElementById("scores").appendChild(score)
}

