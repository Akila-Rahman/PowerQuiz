const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris"], answer: "Paris" },
    { question: "Which is the largest planet?", options: ["Earth", "Mars", "Jupiter"], answer: "Jupiter" }
];

let currentQuestionIndex = 0;
let score = 0;

const startQuizBtn = document.getElementById("startQuiz");
const quizContainer = document.getElementById("quizContainer");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("options");
const nextQuestionBtn = document.getElementById("nextQuestion");
const resultContainer = document.getElementById("resultContainer");
const scoreText = document.getElementById("score");
const restartQuizBtn = document.getElementById("restartQuiz");

startQuizBtn.addEventListener("click", startQuiz);
nextQuestionBtn.addEventListener("click", loadNextQuestion);
restartQuizBtn.addEventListener("click", restartQuiz);

function startQuiz() {
    startQuizBtn.classList.add("d-none");
    quizContainer.classList.remove("d-none");
    loadNextQuestion();
}

function loadNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("btn", "btn-outline-dark", "mt-2");
        button.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(button);
    });

    currentQuestionIndex++;
}

function selectAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex - 1].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
}

function showResults() {
    quizContainer.classList.add("d-none");
    resultContainer.classList.remove("d-none");
    scoreText.textContent = `${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("d-none");
    startQuizBtn.classList.remove("d-none");
}
