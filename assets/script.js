//Global Variables

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
let timeInterval;
let correctAnswers = 0
let questions = [
  {
    questions: "1. What is the HTML tag under which one can write the JavaScript code?",

    choice1: "1. javascript",
    choice2: "2. scripted",
    choice3: "3. js",
    choice4: "4. script",
    answer: "4. script",
  },
  {
    questions: "2. Commonly used data types do NOT include:",

    choice1: "1. strings",
    choice2: "2. boxes",
    choice3: "3. booleans",
    choice4: "4. character",
    answer: "2. boxes",
  },
  {
    questions: "3. What does the word DOM stand for in JavaScript?",

    choice1: "1. Document Object Model",
    choice2: "2. Document Outline Model",
    choice3: "3. Domain Outline Model",
    choice4: "4. Domain Object Model",
    answer: "1. Document Object Model",
  },
  {
    questions: "4. Global variables should be defined in which section of the JavaScript file?",

    choice1: "1. Bottom",
    choice2: "2. Middle",
    choice3: "3. Beginning",
    choice4: "4. Anywhere",
    answer: "3. Beginning",
  },
  {
    questions: "5. What are variables used for in JavaScript?",

    choice1: "1. Storing numbers, dates, or other values",
    choice2: "2. Causing high-school algebra flashbacks",
    choice3: "3. None of these answers",
    choice4: "4. varying randomly",
    answer: "1. Storing numbers, dates, or other values",
  },
  { 
    questions: "6. What is the correct way to write a JavaScript array?",

    choice1: "1. let colors = 'red', 'green', 'blue'",
    choice2: "2. let colors = (1:'red', 2:'green', 3:'blue')",
    choice3: "3. let colors = 1 = ('red'), 2 = ('green'), 3 = ('blue'",
    choice4: "4. let colors = ['red', 'green', 'blue']",
    answer: "4. let colors = ['red', 'green', 'blue']",
  },
];
let timeLeft = questions.length * 15;
function showQuestion() {
    displayQuestions.innerHTML = `<h3> ${questions[questionsIndex].questions} </h3>
      <p><button class="choices">${questions[questionsIndex].choice1}</
  button></p>
      <p><button class="choices">${questions[questionsIndex].choice2}</
  button></p>
      <p><button class="choices">${questions[questionsIndex].choice3}</
  button></p>
      <p><button class="choices">${questions[questionsIndex].choice4}</
  button></p>
      <p> <h4 class="message"></h4>     </p>
      `;
  
    let choices = document.querySelectorAll(".choices");
    let message = document.querySelector(".message");
}