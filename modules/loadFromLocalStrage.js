import addTodo from "addTodo";

// localstrage読み込み
function loadFromLocalStorage() {
  console.log('c');
  const data = JSON.parse(localStorage.getItem("todoData") || "[]");
  document.getElementById("todoList").innerHTML = "";
  data.forEach(item => {
    addTodo(item.text, item.completed, item.priority, item.subtasks);
  });
}

export default loadFromLocalStorage;