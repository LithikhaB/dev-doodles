const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const timerSpan = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let timer;
let timeLeft = 10;

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;
  progressBar.style.width = "0%";

  startScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  answersDisabled = false;
  clearInterval(timer);
  timeLeft = 10;
  timerSpan.textContent = timeLeft;

  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  progressBar.style.width =
    (currentQuestionIndex / quizQuestions.length) * 100 + "%";

  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.style.animationDelay = `${index * 0.05}s`;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });

  startTimer();
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeout();
    }
  }, 1000);
}

function handleTimeout() {
  answersDisabled = true;
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") button.classList.add("correct");
  });
  setTimeout(nextQuestion, 1000);
}

function selectAnswer(event) {
  if (answersDisabled) return;
  answersDisabled = true;
  clearInterval(timer);

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") button.classList.add("correct");
    else if (button === selectedButton) button.classList.add("incorrect");
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) showQuestion();
  else showResults();
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");
  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;
  if (percentage === 100) resultMessage.textContent = "Perfect! You're a genius!";
  else if (percentage >= 80) resultMessage.textContent = "Great job!";
  else if (percentage >= 60) resultMessage.textContent = "Good effort!";
  else if (percentage >= 40) resultMessage.textContent = "Not bad!";
  else resultMessage.textContent = "Keep studying!";
}

function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}
