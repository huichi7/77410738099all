let questions = [
  {
    question: "HIV感染症的潛伏期為多久",
    choices: ["A.10年內", "B.1年內", "C.半年內"],
    answer: "A.10年內"
  },
  
];

let currentQuestion = 0;
let score = 0;

function setup() {
  createCanvas(2000, 2000);
  textSize(50);
}

function draw() {
  background("#8ecae6");
  text(questions[currentQuestion].question, 700, 100);

  let choices = questions[currentQuestion].choices;
  let spacing = 60; // 調整選項之間的垂直間距
  for (let i = 0; i < choices.length; i++) {
    let x = 700;
    let y = 500 + i * spacing;
    text(choices[i], x, y);
  }

  text("Score: " + score, 700, 770);
}

function mouseClicked() {
  let choices = questions[currentQuestion].choices;
  for (let i = 0; i < choices.length; i++) {
    let x = 700;
    let y = 500 + i * 60;
    if (
      mouseX > x &&
      mouseX < x + textWidth(choices[i]) &&
      mouseY > y - textAscent() &&
      mouseY < y
    ) {
      if (choices[i] === questions[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion >= questions.length) {
        currentQuestion = 0;
      }
    }
  }
}