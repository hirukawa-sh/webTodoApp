import loadFromLocalStorage from "loadFromLocalStorage";
import saveToLocalStorage from "saveToLocalStorage";
import addTodo from "addTodo";
import saveAsXML from "saveAsXML";
import loadFromXML from "loadFromXML";

// 外部に公開する関数
window.addTodo = addTodo;
window.saveAsXML = saveAsXML;
window.loadFromXML = loadFromXML;

// リストの並べかえを実装
const todoList = document.getElementById('todoList');
Sortable.create(todoList, {
  animation: 200,
});

// イベント
window.onload = () => {
 setDate();
 loadFromLocalStorage();
};

window.onunload = () => {
 saveToLocalStorage();
};

// 日付のセット
function setDate() {
   const dateLabel = document.getElementById("date-display");
   
   const date = new Date();
   const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
   const formattedDate = `${date.getFullYear()}年 ${date.getMonth() + 1}月 ${date.getDate()}日 ${weekdays[date.getDay()]}曜日`;
   dateLabel.textContent = formattedDate;
}