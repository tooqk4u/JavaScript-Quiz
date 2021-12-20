//Global Variables
let playerInfo = ""
let score = 0;
let startBtn = document.querySelector("#start-btn");
let introBody = document.querySelector(".quiz");
let timerE1 = document.querySelector(".countdown");
let score1 = document.querySelector(".high-score");
let answer = 0;
let displayQuestions = document.querySelector("#display-questions");
let questionsIndex = 0;
let initials = document.querySelector("#initials");
let highScore = document.querySelector("#high-score");
let saveBtn = document.querySelector("#save-btn")
let displayMessage = document.querySelector(".save-message")
let timeInterval;
let correctAnswers = 0;
let scoreArray = []
if(localStorage.getItem("playerInfo")){
  scoreArray = JSON.parse(localStorage.getItem("playerInfo"))
}
let questions = [
  {
    question: "1. What is the HTML tag under which one can write the JavaScript code?",

    choice1: "a. javascript",
    choice2: "b. scripted",
    choice3: "c. js",
    choice4: "d. script",
    answer: "d. script",
  },
  {
    question: "2. Commonly used data types do NOT include:",

    choice1: "a. strings",
    choice2: "b. boxes",
    choice3: "c. booleans",
    choice4: "d. character",
    answer: "b. boxes",
  },
  {
    question: "3. What does the word DOM stand for in JavaScript?",

    choice1: "a. Document Object Model",
    choice2: "b. Document Outline Model",
    choice3: "c. Domain Outline Model",
    choice4: "d. Domain Object Model",
    answer: "a. Document Object Model",
  },
  {
    question: "4. Global variables should be defined in which section of the JavaScript file?",

    choice1: "a. Bottom",
    choice2: "b. Middle",
    choice3: "c. Beginning",
    choice4: "d. Anywhere",
    answer: "c. Beginning",
  },
  {
    question: "5. What are variables used for in JavaScript?",

    choice1: "a. Storing numbers, dates, or other values",
    choice2: "b. Causing high-school algebra flashbacks",
    choice3: "c. None of these answers",
    choice4: "d. varying randomly",
    answer: "a. Storing numbers, dates, or other values",
  },
  { 
    question: "6. What is the correct way to write a JavaScript array?",

    choice1: "a. let colors = 'red', 'green', 'blue'",
    choice2: "b. let colors = (1:'red', 2:'green', 3:'blue')",
    choice3: "c. let colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
    choice4: "d. let colors = ['red', 'green', 'blue']",
    answer: "d. let colors = ['red', 'green', 'blue']",
  },
];
let timeLeft = questions.length * 15;

startBtn.addEventListener("click", startQuiz);
function startQuiz() {
  displayQuestions.classList.remove("hide");
  introBody.classList.add("hide");
  //start the clock-set interval//
  timeInterval = setInterval(countdown, 1000);

  showQuestion();
}

function showQuestion() {
  displayQuestions.innerHTML = `<h3> ${questions[questionsIndex].question} </h3>
    <p><button class="choices btn">${questions[questionsIndex].choice1}</button></p>
    <p><button class="choices btn">${questions[questionsIndex].choice2}</button></p>
    <p><button class="choices btn">${questions[questionsIndex].choice3}</button></p>
    <p><button class="choices btn">${questions[questionsIndex].choice4}</button></p>
    <p> <h4 class="message"></h4></p>
    `;

  let choices = document.querySelectorAll(".choices");
  let message = document.querySelector(".message");
  

  for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", function () {
      let buttontext = this.textContent;
      if (questionsIndex < questions.length) {
        if (questions[questionsIndex].answer === buttontext) {
          message.textContent = "Correct!";
          //correctAnswers++
          console.log(correctAnswers)
        } else {
          message.textContent = "Wrong!" //The correct answer is " + questions[questionsIndex].ans
          timeLeft = timeLeft - 15;
        }
        questionsIndex++;
        if (questionsIndex < questions.length) {
          setTimeout(showQuestion, 500);
            
       } else {
        clearInterval(timeInterval);
        displayQuestions.classList.add("hide");
        initials.classList.remove("hide");
        //showSaveBtn()
       }
      }
    });
    console.log(correctAnswers)
  }  
  //correctAnswers/questions.length * 100
}

function countdown() {
  if (timeLeft >= 0) {
    timerE1.textContent = timeLeft;
    timeLeft--;
  } else {
    timerE1.textContent = "You have run out of time";
    clearInterval(timeInterval);
    displayQuestions.classList.add("hide");
    initials.classList.remove("hide");
    
  }
}

saveBtn.addEventListener("click", saveScores)
function saveScores(){
  let initialsInput = document.querySelector("#name").value;
  
  
  console.log(initialsInput);
 
  //let score = timeLeft//correctAnswers/questions.length * 100;
  console.log(timeLeft);

  playerInfo = {
  playerName: initialsInput,
  playerScore: timerE1.textContent
  };
  scoreArray.push(playerInfo)
  localStorage.setItem("playerInfo", JSON.stringify(scoreArray));
  initials.classList.add("hide");
  highScore.classList.remove("hide"); 
  showHighScore() 
}

function showHighScore() {
  let tdstring = ""
  
  scoreArray = scoreArray.sort(function(current, next){
    return next.playerScore - current.playerScore
  });
  for (let i = 0; i < scoreArray.length; i++) {
    tdstring = tdstring + `<tr><td>${scoreArray[i].playerName}</td><td>${scoreArray[i].playerScore}</td></tr>`  
  }
  highScore.innerHTML = `<h2 class="title">High Scores</h2>
  <table><tr><th>Initials</th><th>Score</th></tr> ${tdstring}</table>
  <a href="index.html"><button class="btn">Return to Quiz</button></a>`;
}

score1.addEventListener("click", function(){
  introBody.classList.add("hide");
  displayQuestions.classList.add("hide");
  initials.classList.add("hide");
  highScore.classList.remove("hide"); 
  showHighScore() 
})

