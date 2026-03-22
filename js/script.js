console.log("script.js connected!");
console.log("script.js connected!");

const questionBlocks = document.querySelectorAll(".question-block");
const resultBtn = document.getElementById("result-btn");
const resultContainer = document.getElementById("result-container");

const answers = {};

questionBlocks.forEach((block) => {
  const questionName = block.dataset.question;
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");
      answers[questionName] = Number(button.dataset.points);
    });
  });
});

function displayResult() {
  if (Object.keys(answers).length < questionBlocks.length) {
    resultContainer.textContent = "All questions must be answered to see the result.";
    return;
  }

  let total = 0;

  for (let key in answers) {
    total += answers[key];
  }

  if (total <= 4) {
    resultContainer.textContent = "Congrats!, you are a Cat! You are a calm, cozy, and independent companion.";
  } else {
    resultContainer.textContent = "Congrats!, you are a Dog! You are a playful, social, and full of energy companion.";
  }
}

resultBtn.addEventListener("click", displayResult);