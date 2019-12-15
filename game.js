import templates from "./templates.js";
import questions from "./questions.js";
import chrono from "./chrono.js";

const questionsCopy = [...questions]; // keep copy of all questions

const container = document.querySelector("body");
var score = 0;

function setStep1() {
  container.innerHTML = templates.step1();
  document.querySelector("#start-btn").onclick = function() {
    console.log("click");
    setPlayRound();
  };
}

function setPlayRound() {
  if (score >= 10) {
    score = 0;
    container.innerHTML = templates.step3();
    document
      .getElementById("newGame-btn")
      .addEventListener("click", function() {
        setStep1();
      });
    // chrono(time => {
    //   console.log(time);
    // });
    return;
  }
  let intervalId = chrono(setPlayRound, setTime);

  const randomIndex = Math.floor(Math.random() * Math.floor(questions.length));
  const currentQuestion = questions[randomIndex];

  console.log("randomIndex => ", randomIndex);
  console.log("questions => ", questions);
  console.log("currentQuestion => ", questions[randomIndex]);
  console.log("backup => ", questionsCopy);

  questions.splice(randomIndex, 1);
  const q = currentQuestion.question;
  const src = currentQuestion.src;
  const ans = currentQuestion.answers;
  const resp = ans.filter(a => a.correct === true)[0];
  // console.log("index", random);
  console.log("question", currentQuestion);
  console.log("proposition", ans);
  console.log("reponse", resp);
  if (currentQuestion.mode === "image") {
    container.innerHTML = templates.step2A(q, src, ans, score);
  } else if (currentQuestion.mode === "audio") {
    container.innerHTML = templates.step2B(q, src, ans, score);
  }

  function setTime(time) {
    const timer = document.getElementById("chrono");
    timer.textContent = `Time left :${time} `;
  }

  console.log(intervalId);
  // the order matters !!!
  const answerBtns = document.querySelectorAll(".list .btn");
  console.log(answerBtns);

  function checkAnswer(evt) {
    console.log(evt.target.textContent === resp.text);
    console.log(evt.target.textContent);
    console.log(resp.text);
    clearInterval(intervalId);
    if (evt.target.textContent === resp.text) {
      console.log("bonnerep");
      score += 1;
      document.getElementById("gif1").innerHTML =
        '<p class="win"> Hurray !!</p>';
    } else
      document.getElementById("gif1").innerHTML =
        '<p class="loose"> Oops !!</p>';
    setTimeout(function() {
      setPlayRound();
    }, 10000);
  }

  answerBtns.forEach(btn => {
    btn.onclick = checkAnswer;
  });

  console.log(answerBtns);
}

setStep1();
