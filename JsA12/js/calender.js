const week = new Array("SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT");
const calend = document.querySelector("#calender");

let currentTime = new Date();
let currentYear = currentTime.getFullYear();
let currentMonth = currentTime.getMonth() + 1;
let currentDate = currentTime.getDate();
let currentDay = currentTime.getDay();

// 마지막 날짜일
let lastDate = new Date(currentYear, currentMonth, 0);
let lastDateDate = lastDate.getDate();
let lastDateDay = lastDate.getDay();

let prevLastDate = new Date(currentYear, currentMonth - 1, 0);
let prevLastDateDate = prevLastDate.getDate();
let prevLastDateDay = prevLastDate.getDay();

const calBody = document.querySelector(".cal_body");

for (let i = 0; i <= prevLastDateDay; i++) {
  calBody.innerHTML += '<div class="cal"></div>';
}

for (let i = 1; i <= lastDateDate; i++) {
  calBody.innerHTML += '<div class="cal">' + i + "</div>";
}
