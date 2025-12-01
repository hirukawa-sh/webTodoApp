import {addTodo} from "addTodo";

// XML読み込み
function loadFromXML(event) {
  const file = event.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(e) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(e.target.result, "application/xml");
    const todoElements = xmlDoc.getElementsByTagName("todo");
    
    document.getElementById("todoList").innerHTML = "";
    for (let todo of todoElements) {
      const text = todo.textContent.trim().split("\n")[0].trim(); // タスクの本文
      const completed = todo.getAttribute("completed") === "true";
      const priority = todo.getAttribute("priority") || "ℹ️低";
      
      const subtaskNodes = todo.getElementsByTagName("subtask");
      const subtasks = Array.from(subtaskNodes).map(sub => ({
        text: sub.textContent,
        completed: sub.getAttribute("completed") === "true"
      }));
      
      addTodo(text, completed, priority, subtasks);
    }
  };
  reader.readAsText(file);
}

export default loadFromXML;