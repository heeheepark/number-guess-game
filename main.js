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
let chance = document.getElementById("num");
let answerBtn = document.getElementById("answer");

let playButton = document.getElementById("submit");
playButton.addEventListener("click", inspect);

let reset = document.getElementById("reset");
reset.addEventListener("click", gameReset);


function randomNum() {
  computerNum = Math.floor(Math.random() * 100) + 1;
  console.log("정답", computerNum);
}
randomNum();

function inspect() {
  if(0 < num.value && num.value < 101) {
    play();
  } else {
    alert("1~100사이의 값을 입력하시오");
  }  
}

function play() {
  let userInputValue = num.value;
  numbers.push(userInputValue);
    if(numbers.length < 6) {
      if(userInputValue < computerNum) {
        result.innerText = "UP!";
        num.value = null;
        remainchance();
      } else if (userInputValue > computerNum) {
        result.innerText = "DOWN!";
        num.value = null;
        remainchance();
      } else {
        result.innerText = "정답입니다!"
        playButton.disabled = true;
        remainchance();
      }
    } else {
      alert("횟수를 초과하였습니다.")
      playButton.disabled = true;
    }
  console.log(numbers)
}

function remainchance() {
  let totalChance = 5;
    totalChance -= numbers.length;
    console.log(totalChance);
    chance.innerText = totalChance;
  }

function gameReset() {
  num.value = null;
  numbers = [];
  randomNum();
  playButton.disabled = false;
}

function btnDisabled() {
  let target = document.getElementsByClassName("submit");
  target.disabled = true;
  target.onclick = "";
}