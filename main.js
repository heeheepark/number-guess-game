// 유저는 숫자를 입력할 수 있다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 작으면 Up! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자보다 크면 Down! 이라고 알려준다
// 유저가 입력한 숫자가 컴퓨터가 뽑은 숫자와 일치하다면 That’s right이라고 뜨고 게임이 종료된다.
// 유저는 총 5번의 기회가 있다
// 게임이 종료되면 버튼은 비활성화된다
// 리셋버튼을 누르면 게임이 초기화된다
// 유저가 1~100범위 밖에 숫자를 입력할시에 경고메세지가 뜬다
// 유저가 이미 입력한 값을 또 입력할 시에 경고메세지가 뜬다
// 반응형 UI

let computerNum = 0;
let numbers = [];
let result = document.getElementById("result");
let num = document.getElementById("inputNum");
let chanceNum = document.getElementById("num");
let chance = 5;
let img = document.getElementById("img");
let gameOver = false;
let answerArea = document.getElementById("answerArea");

let playButton = document.getElementById("submit");
playButton.addEventListener("click", play);

let reset = document.getElementById("reset");
reset.addEventListener("click", gameReset);

let answerBtn = document.getElementById("answer");
answerBtn.addEventListener("click", function() {
  answerArea.style.display = "block";
  answerArea.innerText = `정답: ${computerNum}`;
})

num.addEventListener("focus", function() {
  num.value = "";
})

function randomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}
randomNum();

function play() {
  let userInputValue = num.value;

  if(num.value < 1 || num.value > 100) {
    alert("1~100사이의 값을 입력하시오.");
    return;
  }  
  if(numbers.includes(userInputValue)) {
    alert("이미 입력한 값입니다. 다른 숫자를 입력해주세요.");
    return;
  }
  chance--;
  chanceNum.innerText = chance;
  if(userInputValue < computerNum) { //유효성 검사
    result.innerText = "UP!";
    result.style.color = "red";
    img.src = "gif/up.gif";
  } else if (userInputValue > computerNum) { //유효성 검사
    result.innerText = "DOWN!";
    result.style.color = "blue";
    img.src = "gif/down.gif";
  } else {
    result.innerText = "정답입니다!"
    result.style.color = "#000";
    gameOver = true;
    img.src = "gif/answer.gif";
  }
  numbers.push(userInputValue);

  if(chance < 1) {
    gameOver = true
    answerBtn.style.display = "block";
  }
  if(gameOver == true ) {
    playButton.disabled = true;
  }
  console.log(numbers)
}

function gameReset() {
  chance = 5;
  chanceNum.innerText = chance;
  num.value = null;
  numbers = [];
  playButton.disabled = false;
  img.src = "gif/giphy.gif";
  result.innerText = "Up&Down"
  gameOver = false;
  answerArea.style.display = "none";
  answerBtn.style.display = "none";
  result.style.color = "#000";
  randomNum();
}

function btnDisabled() {
  let target = document.getElementsByClassName("submit");
  target.disabled = true;
  target.onclick = "";
}