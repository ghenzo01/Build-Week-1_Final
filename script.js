    const questions = [
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
          "Central Process Unit",
          "Computer Personal Unit",
          "Central Processor Unit",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
          "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
          "Counter Strike: Source",
          "Corrective Style Sheet",
          "Computer Style Sheet",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
          "Ice Cream Sandwich",
          "Jelly Bean",
          "Marshmallow",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
      },
    ];


let score = 0;
let questionNumber =1;
let timerInterval = null; // Variabile per tenere traccia del timer



function shuffle(array) {
   for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; } 
  return array;
  }



function generateQuestion(){

  resetRadio();

  let totalAnswers = questions[questionNumber-1].incorrect_answers.concat(questions[questionNumber-1].correct_answer);

  console.log(totalAnswers);

  totalAnswers = shuffle(totalAnswers);
  console.log(totalAnswers);

  let testoDomanda = document.getElementById("testo-domanda");
  testoDomanda.innerText = questions[questionNumber-1].question;

  let risposteTotali = totalAnswers.length
  console.log(risposteTotali)

  for (i=0; i<risposteTotali; i++){

    let j = i+1;
    let answerText = document.getElementById("risposta-"+j);

    answerText.value= totalAnswers[i];
    answerText.style.visibility = 'visible';

    let label = document.getElementById("label-risp-"+j);
    label.innerText = totalAnswers[i];
    label.style.visibility = 'visible';


    let questionNr=document.getElementById("question-nr");
    let rose=document.getElementById("rose");

    questionNr.innerText = `QUESTION  ${questionNumber} `
    rose.innerText = "  / "+ questions.length


    const radioButtons = document.querySelectorAll('input[name="answer"]');

    radioButtons.forEach(radio => {
    radio.addEventListener('click', handleRadioClick);
});
  }

  }


  function handleRadioClick(event) {
    console.log("Risposta selezionata", event.target.value);
    
    if(questions[questionNumber-1].correct_answer === event.target.value){
      console.log("Risposta esatta");
      score++;
    }
    else{
      console.log("Risposta errata");
    }

    questionNumber++
    controlEndOfQuiz()
     
    }


function controlEndOfQuiz(){
  
  clearInterval(timerInterval);

  if(questionNumber>questions.length){
    resetRadio();
    
    
    let testoDomanda = document.getElementById("testo-domanda");
    testoDomanda.innerText = `Hai totalizzato ${score} punti`;

   let footer = document.querySelector("footer");
   footer.classList.add("hidden");

   let timer = document.querySelector(".timer-container");
   timer.classList.add("hidden");

  }else{
    generateQuestion();
    startTimer();
   
  }


}



function resetRadio() {
  for (let i = 0; i < 4; i++) {
    let j = i + 1;
    let answerText = document.getElementById("risposta-" + j);
    let label = document.getElementById("label-risp-" + j);

      answerText.style.visibility = 'hidden';
      answerText.checked = false;

      label.style.visibility = 'hidden';
    
  }
}


  generateQuestion();




// Seleziona il cerchio e il testo del timer
const circle = document.querySelector('.progress-ring__circle');
const timeDisplay = document.getElementById('time');

// Calcola la circonferenza del cerchio
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

// Imposta la circonferenza del cerchio e la lunghezza iniziale del tratto
circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = circumference;


// Funzione per aggiornare il timer
function updateTimer(timeLeft) {
    timeDisplay.textContent = timeLeft;
    const offset = circumference - (timeLeft / 10) *circumference;
    circle.style.strokeDashoffset = offset;
   
}



function startTimer() {
  if (timerInterval) {
      clearInterval(timerInterval);
  }

  let timeLeft = 10;
  updateTimer(timeLeft);

  timerInterval = setInterval(() => {
      if (timeLeft <= 0) {
          clearInterval(timerInterval);
          questionNumber++;
          
          startTimer();
          
          controlEndOfQuiz()



      } else {
          timeLeft--;
          updateTimer(timeLeft);
      }
  }, 1000);
}

function setProgress(percent) { 
  const offset = circumference - (percent / 100) * circumference; 
  circle.style.strokeDashoffset = offset; }

startTimer()















