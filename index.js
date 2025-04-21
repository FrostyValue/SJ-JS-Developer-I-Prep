import questions1 from './public/data/qVTC1.js';
import questions2 from './public/data/qOFC2.js';
import questions4 from './public/data/questions4.js';

let currentQuestionIndex = 0;
let questions = [];
let selectedAnswers = [];
let score = 0;

const TOTAL_QUESTIONS = 75;

document.getElementById("next-btn").style.display = "none";
document.getElementById("explanation-container").style.display = "none";
document.getElementById("confirm-btn").style.display = "block";

const questionSources = [
  { questions: questions1(), percentage: 50 },
  { questions: questions2(), percentage: 50 },
  { questions: questions4(), percentage: 0 },
];

async function loadQuestions() {
  try {
    const loadedQuestions = [];

    for (const source of questionSources) {
      const numberToTake = Math.round(
        (source.percentage / 100) * TOTAL_QUESTIONS
      );
      const shuffled = source.questions.sort(() => 0.5 - Math.random());
      loadedQuestions.push(...shuffled.slice(0, numberToTake));
    }

    questions = loadedQuestions
      .sort(() => 0.5 - Math.random())
      .slice(0, TOTAL_QUESTIONS);

    showQuestion();
  } catch (error) {
    console.error("Error al cargar las preguntas:", error);
  }
}

function showQuestion() {
  const question = questions[currentQuestionIndex];

  document.getElementById("question-text").textContent = question.question;

  const codeContainer = document.getElementById("code-container");
  const codeSnippet = document.getElementById("code-snippet");
  if (question.code) {
    codeContainer.style.display = "block";
    codeSnippet.textContent = question.code;
  } else {
    codeContainer.style.display = "none";
  }

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";
  Object.keys(question.options).forEach((optionKey) => {
    const button = document.createElement("button");
    button.classList.add("option-btn");
    button.textContent = question.options[optionKey];
    button.setAttribute("data-option", optionKey);
    button.onclick = () => handleOptionClick(optionKey);
    optionsContainer.appendChild(button);
  });

  selectedAnswers = [];

  const instructionText = document.getElementById("selection-instruction");
  if (question.number_of_correct_answers > 1) {
    instructionText.textContent = `Selecciona exactamente ${question.number_of_correct_answers} opciones.`;
    enableMultipleSelection();
  } else {
    instructionText.textContent = "";
    enableSingleSelection();
  }
}

function handleOptionClick(optionKey) {
  const question = questions[currentQuestionIndex];

  if (question.number_of_correct_answers === 1) {
    selectedAnswers = [optionKey];
  } else {
    if (selectedAnswers.includes(optionKey)) {
      selectedAnswers = selectedAnswers.filter((ans) => ans !== optionKey);
    } else {
      selectedAnswers.push(optionKey);
    }
  }

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.querySelectorAll("button").forEach((button) => {
    if (selectedAnswers.includes(button.getAttribute("data-option"))) {
      button.style.backgroundColor = "lightgreen";
    } else {
      button.style.backgroundColor = "";
    }
  });
}

function enableMultipleSelection() {
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.querySelectorAll("button").forEach((button) => {
    button.style.pointerEvents = "auto";
    button.disabled = false;
  });
}

function enableSingleSelection() {
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.querySelectorAll("button").forEach((button) => {
    button.style.pointerEvents = "auto";
    button.disabled = false;
  });
}

document.getElementById("confirm-btn").onclick = checkAnswer;
document.getElementById("next-btn").onclick = nextQuestion;

function checkAnswer() {
  const question = questions[currentQuestionIndex];
  const explanationContainer = document.getElementById("explanation-container");
  const explanationText = document.getElementById("explanation-text");
  const nextButton = document.getElementById("next-btn");

  if (!Array.isArray(question.correct_options)) {
    console.error("La pregunta actual no tiene 'correct_options':", question);
    alert("Error: la pregunta no tiene opciones correctas configuradas.");
    return;
  }

  if (selectedAnswers.length === 0) {
    alert("Selecciona al menos una opción.");
    return;
  }

  if (
    question.number_of_correct_answers > 1 &&
    selectedAnswers.length !== question.number_of_correct_answers
  ) {
    alert(
      `Debes seleccionar exactamente ${question.number_of_correct_answers} opciones.`
    );
    return;
  }

  const isCorrect =
    selectedAnswers.length === question.correct_options.length &&
    selectedAnswers.every((option) =>
      question.correct_options.includes(option)
    );

  if (isCorrect) {
    explanationText.textContent = "¡Respuesta correcta!";
    explanationContainer.style.color = "green";
    score++;
  } else {
    explanationText.textContent = question.explanation;
    explanationContainer.style.color = "red";
  }

  explanationContainer.style.display = "block";
  nextButton.style.display = "block";
  document.getElementById("confirm-btn").style.display = "none";

  document.querySelectorAll(".option-btn").forEach((button) => {
    button.disabled = true;
    const optionKey = button.getAttribute("data-option");
    if (question.correct_options.includes(optionKey)) {
      button.style.border = "2px solid green";
    } else if (selectedAnswers.includes(optionKey)) {
      button.style.border = "2px solid red";
    }
  });
}

function nextQuestion() {
  currentQuestionIndex++;
  selectedAnswers = [];
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    alert(
      `¡Has completado el quiz!\nPuntuación final: ${score} de ${questions.length}`
    );
  }
}

window.onload = loadQuestions;