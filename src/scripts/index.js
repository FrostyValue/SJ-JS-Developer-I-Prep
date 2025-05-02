import questions1 from "../data/qVTC1.js";
import questions2 from "../data/qOFC2.js";
import questions3 from "../data/qBE3.js";
import questions4 from "../data/qDEH4.js";
import questions5 from "../data/qAP5.js";
import questions6 from "../data/qSS6.js";
import questions7 from "../data/qTST7.js";

let currentQuestionIndex = 0;
let questions = [];
let selectedAnswers = [];
let score = 0;
let startTime;
let timerInterval;
let timerMode = "default";
let questionAmount = 60;

// Inicialización de elementos del DOM
const timerDisplay = document.getElementById("timer-display");
const configBtn = document.getElementById("config-btn");
const questionAmountRadios = document.querySelectorAll(
  'input[name="question-amount"]'
);
const configModal = document.getElementById("config-modal");
const closeModal = document.getElementById("close-modal");
const radioButtons = document.querySelectorAll('input[name="timer-mode"]');
const questionCounter = document.getElementById("question-counter");
const allQuestionsToggle = document.getElementById("all-questions-toggle");

const questionSources = [
  { questions: questions1(), percentage: 23 },
  { questions: questions2(), percentage: 25 },
  { questions: questions3(), percentage: 17 },
  { questions: questions4(), percentage: 7 },
  { questions: questions5(), percentage: 13 },
  { questions: questions6(), percentage: 8 },
  { questions: questions7(), percentage: 7 },
];

// Manejar el cambio de la cantidad de preguntas
questionAmountRadios.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    questionAmount =
      e.target.value === "all" ? "all" : parseInt(e.target.value);
    loadQuestions(); // Cargar las preguntas cuando cambie el valor
    configModal.classList.add("hidden"); // Cerrar modal
  });
});

// Función para iniciar el temporizador
function startTimer() {
  startTime = Date.now();
  timerInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const seconds = Math.floor((elapsed / 1000) % 60);
    const minutes = Math.floor(elapsed / 60000);
    timerDisplay.textContent = `Time: ${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }, 1000);
}

// Función para detener el temporizador
function stopTimer() {
  clearInterval(timerInterval);
  const elapsed = Date.now() - startTime;
  const totalSeconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0"
  )}`;
}

// Mostrar el modal de configuración
configBtn.addEventListener("click", () => {
  configModal.classList.add("active");
});

closeModal.addEventListener("click", () => {
  configModal.classList.remove("active");
});

// Manejar la selección del temporizador en el modal
radioButtons.forEach((radio) => {
  radio.addEventListener("change", (e) => {
    timerMode = e.target.value;
    resetTimer();
    configModal.style.display = "none"; // Ocultar el modal al seleccionar una opción
  });
});

// Función para reiniciar el temporizador con la opción seleccionada
function resetTimer() {
  clearInterval(timerInterval);

  if (timerMode === "default") {
    timerDisplay.textContent = "00:00";
  } else {
    let totalSeconds = timerMode === "105" ? 105 * 60 : 135 * 60;

    timerInterval = setInterval(() => {
      const minutes = Math.floor(totalSeconds / 60)
        .toString()
        .padStart(2, "0");
      const seconds = (totalSeconds % 60).toString().padStart(2, "0");
      timerDisplay.textContent = `Remaining time: ${minutes}:${seconds}`;
      totalSeconds--;

      if (totalSeconds < 0) {
        clearInterval(timerInterval);
        timerDisplay.textContent = "00:00";
      }
    }, 1000);
  }
}

// Cargar las preguntas
async function loadQuestions() {
  try {
    const loadedQuestions = [];
    const useAllQuestions = questionAmount === "all"; // Verificar si se deben cargar todas las preguntas
    const totalQuestions = useAllQuestions
      ? questionSources.reduce((sum, src) => sum + src.questions.length, 0) // Calcular total de preguntas si se seleccionan todas
      : questionAmount;

    console.log("Total de preguntas a cargar:", totalQuestions); // Para verificar

    for (const source of questionSources) {
      const sourceQuestions = source.questions;

      if (useAllQuestions) {
        loadedQuestions.push(...sourceQuestions);
      } else {
        const numberToTake = Math.round(
          (source.percentage / 100) * totalQuestions
        );
        const shuffled = sourceQuestions.sort(() => 0.5 - Math.random());
        loadedQuestions.push(...shuffled.slice(0, numberToTake));
      }
    }

    // Mezclar las preguntas finales
    questions = loadedQuestions.sort(() => 0.5 - Math.random());

    // En caso de que se hayan añadido más de la cuenta por redondeos
    if (!useAllQuestions) {
      questions = questions.slice(0, totalQuestions);
    }

    showQuestion();
  } catch (error) {
    console.error("Error al cargar las preguntas:", error);
  }
}

// Randomize the order of the responses
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Mostrar la pregunta en pantalla
function showQuestion() {
  const question = questions[currentQuestionIndex];

  questionCounter.textContent = `${currentQuestionIndex + 1} of ${
    questions.length
  }`;

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
  const optionKeys = Object.keys(question.options);
  shuffleArray(optionKeys);

  optionKeys.forEach((optionKey) => {
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
    instructionText.textContent = `Selecciona ${question.number_of_correct_answers} opciones.`;
    enableMultipleSelection();
  } else {
    instructionText.textContent = "";
    enableSingleSelection();
  }

  document.getElementById("confirm-btn").style.display = "block";
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

  if (currentQuestionIndex === 0) {
    configBtn.disabled = true;
    configBtn.style.opacity = "0.5";
    configBtn.style.cursor = "not-allowed";
  }

  document.getElementById("question-counter").textContent = `${
    currentQuestionIndex + 1
  } of ${questions.length}`;
}

// Función para habilitar la selección múltiple
function enableMultipleSelection() {
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.querySelectorAll("button").forEach((button) => {
    button.style.pointerEvents = "auto";
    button.disabled = false;
  });
}

// Función para habilitar la selección simple
function enableSingleSelection() {
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.querySelectorAll("button").forEach((button) => {
    button.style.pointerEvents = "auto";
    button.disabled = false;
  });
}

// Función para comprobar la respuesta seleccionada
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
    if (timerMode === "105" || timerMode === "135") {
      explanationText.textContent = "¡Respuesta incorrecta!";
    } else {
      explanationText.textContent = question.explanation;
    }
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

// Función para pasar a la siguiente pregunta
function nextQuestion() {
  currentQuestionIndex++;
  selectedAnswers = [];

  // Ocultar la explicación y el botón "Siguiente"
  document.getElementById("explanation-container").style.display = "none";
  document.getElementById("next-btn").style.display = "none";

  // Mostrar el botón "Confirmar"
  document.getElementById("confirm-btn").style.display = "block";

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    const finalTime = stopTimer();
    const percentScore = Math.round((score / questions.length) * 100);
    const resultado =
      percentScore >= 65
        ? "¡Has aprobado! 🎉"
        : "Has suspendido, vuelve a intentarlo.";

    alert(
      `¡Has completado el test!\n` +
        `Puntuación final: ${score} de ${questions.length} (${percentScore}%)\n` +
        `Tiempo total: ${finalTime}\n\n` +
        `${resultado}`
    );
  }
}

// Inicializar las preguntas y el temporizador
document.addEventListener("DOMContentLoaded", () => {
  startTimer();
  loadQuestions();
});
