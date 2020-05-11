var dateTarget = document.getElementById("getDate");
var DOWTarget = document.getElementById("getDOW");
var clockTarget = document.getElementById("getClock");

function getDate() {
  var date=new Date();
  var month=date.getMonth();
  var clockDate=date.getDate();
  dateTarget.innerText=`${month+1}월 ${clockDate}일`;
}

function getDOW() {
  var date = new Date();
  var day = date.getDay();
  var week = ['일', '월', '화', '수', '목', '금', '토'];
  DOWTarget.innerText = `${week[day]}`;
}

function getClock() {
  var date = new Date();
  var hours=date.getHours();
  var minutes=date.getMinutes();
  var seconds=date.getSeconds();
  clockTarget.innerText = `요일 ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes }`  : minutes }:${seconds < 10 ? `0${seconds }`  : seconds }`;
}

function init() {
  getDate();
  getDOW();
  getClock();
  setInterval(getDate, 1000);
  setInterval(getDOW, 1000);
  setInterval(getClock, 1000);
}

init();
