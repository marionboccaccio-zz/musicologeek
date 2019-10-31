const step1 = function() {
  return `
  <div id="container">
    <header>
        <h1>Musicologeek</h1>
    </header>
        
    
    <div>
    <h2>Welcome!</h2> 
    <p>
        Will you be able to link each 
        <span>SOUND and EMOJI</span>  with its 
        <span>INSTRUMENT and FAMILY?</span> <br/>
        Press the 
        <span>START </span> button and show us what a musicologeek you are!<br/>
        <span>Beware of tricks</span> ! 
    </p>    
    </div>

    <div class="start">
        <a  id="start-btn">Start</a>
    </div>
    </div>`;
};
const step2A = function(question, src, answers, score) {
  return `
  <div id="container-game">
<div id="chrono-points">
    <div id="points">Points: ${score}</div>
    <div id="chrono">Time left :</div>
    </div>
<div id="question">
    <img class="img" src="${src}"/>
    <p id="text">${question}</p>
    <div id="gif1"></div>
    <div id="gif2"></div>

<ul class="list">

  <li><button class="btn">${answers[0].text} </button> </li>
  <li><button class="btn">${answers[1].text}</button></li>
  <li><button class="btn">${answers[2].text}</button></li>
</ul>
</div>
</div>`;
};

const step2B = function(question, src, answers, score) {
  return `
  <div id="container-game">
<div id="chrono-points">
    <div id="points">Points : ${score}</div>
    <div id="chrono">Time left :</div>
</div>
<div id="question">
    <audio class="audio" controls src="${src}"></audio>
    <p id="text">${question}</p>
    <div id="gif1"></div>
    <div id="gif2"></div>
<ul id="answer-buttons" class="list">
  <li><button class="btn">${answers[0].text}</button></li>
  <li><button class="btn">${answers[1].text}</button></li>
  <li><button class="btn">${answers[2].text}</button></li>
</ul>
</div>
</div>`;
};

const step3 = function() {
  return `
  <div id="final-container">
<div id="score">
    <p>Hurray! You have collected <span>10 amazing points</span>!</p>
</div>
<div id="victory">Victory!</div>
<div id="final-say">
    <p>You are now an <span>official Musicologeek!</span></p>
</div>
<div class="newgame">
<button id="newGame-btn" class="newGame-btn btn">NEW GAME</button>
</div>
</div>`;
};
export default { step1, step2A, step2B, step3 };
