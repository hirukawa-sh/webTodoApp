// localstrage保存
function saveToLocalStorage() {
  const todos = [];
  document.querySelectorAll("#task-list").forEach(task => {
    const text = task.querySelector("input[type='text']").value;
    const completed = task.querySelector("input[type='checkbox']").checked;
    const priority = task.querySelector("select").value;
    const deadline = task.querySelector("input[type='datetime-local']").value;
    
    const subtasks = Array.from(task.querySelectorAll("#subtask-list")).map(subtask => {
      return {
        text: subtask.querySelector("input[type='text']").value,
        completed: subtask.querySelector("input[type='checkbox']").checked
      };
    });
    
    todos.push({ text, completed, priority, deadline, subtasks });
  });
  
  localStorage.setItem("todoData", JSON.stringify(todos));
}

export default saveToLocalStorage;