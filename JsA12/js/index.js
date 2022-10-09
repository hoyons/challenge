const loginHome = document.querySelector("#login");
const loginForm = document.querySelector("#login_form");
const loginIdInput = document.querySelector("#login_form input[id=user_id]");
const loginPwInput = document.querySelector("#login_form input[id=user_pw]");
const loginSubmit = document.querySelector("#login_submit");

const todo = document.querySelector("#todo");
const logout = document.querySelector("#logout");
const footer = document.querySelector("#footer");
const clock1 = document.querySelector("#clock1");
const clock2 = document.querySelector("#clock2");
const today = document.querySelector(".today");
const calender = document.querySelector("#calender");
const weather = document.querySelector("#weather2");

const HIDDEN_CLASSNAME = "hidden";
const DISPLAY_CLASSNAME = "display";
const SAVEID_KEY = "saveid";
const SAVEPW_KEY = "savepw";

//로그인

function onLoginSubmit(event) {
  event.preventDefault();
  const userId = loginIdInput.value;
  const userPw = loginPwInput.value;
  if (userId.length < 4 || userPw.length < 4) {
    alert("ID와 Password는 최소 4자리 이상이어야 합니다!");
  } else {
    localStorage.setItem(SAVEID_KEY, userId);
    localStorage.setItem(SAVEPW_KEY, userPw);

    console.log(localStorage);

    loginHome.classList.remove(DISPLAY_CLASSNAME);
    loginHome.classList.add(HIDDEN_CLASSNAME);
    todo.classList.remove(HIDDEN_CLASSNAME);
    todo.classList.add(DISPLAY_CLASSNAME);
    logout.classList.remove(HIDDEN_CLASSNAME);
    footer.classList.add(HIDDEN_CLASSNAME);
    calender.classList.remove(HIDDEN_CLASSNAME);
    calender.classList.add(DISPLAY_CLASSNAME);
  }
  console.log(userId);
  console.log(userPw);
}

// 로그아웃 버튼

function onLogoutClick(event) {
  event.preventDefault();

  loginHome.classList.remove(HIDDEN_CLASSNAME);
  loginHome.classList.add(DISPLAY_CLASSNAME);
  todo.classList.remove(DISPLAY_CLASSNAME);
  todo.classList.add(HIDDEN_CLASSNAME);
  logout.classList.add(HIDDEN_CLASSNAME);
  footer.classList.remove(HIDDEN_CLASSNAME);
  calender.classList.remove(DISPLAY_CLASSNAME);
  calender.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
logout.addEventListener("click", onLogoutClick);

// 시계

function getClock1() {
  clock1.innerText = new Date().toLocaleTimeString();
}

function getClock2() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const mSeconds = String(date.getMilliseconds()).padStart(3, "0");
  clock2.innerText = `${hours}:${minutes}:${seconds}:${mSeconds}`;
}

function getToday() {
  const date = new Date();
  today.innerText = `${date.getFullYear()}년도 ${date.getMonth()}월`;
}

getClock1();
setInterval(getClock1, 1000);
getClock2();
setInterval(getClock2, 80);
getToday();
