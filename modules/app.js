import loadFromLocalStorage from "loadFromLocalStorage";
import saveToLocalStorage from "saveToLocalStorage";
import addTodo from "addTodo";
import saveAsXML from "saveAsXML";

window.addTodo = addTodo;
window.saveAsXML = saveAsXML;

function app() {
  // イベント
  window.onload = () => {
   setDate();
   loadFromLocalStorage();
  };
  
  window.onunload = () => {
   saveToLocalStorage();
  };
}

// 日付のセット
function setDate() {
   const dateLabel = document.getElementById("date-display");
   
   const date = new Date();
   const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
   const formattedDate = `${date.getFullYear()}年 ${date.getMonth() + 1}月 ${date.getDate()}日 ${weekdays[date.getDay()]}曜日`;
   dateLabel.textContent = formattedDate;
}

app();