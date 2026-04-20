// localstrage保存
function saveToLocalStorage() {
  const todos = [];
  document.querySelectorAll("#task-list").forEach(task => {
    const text = task.querySelector("input[name='task']").value;
    const completed = task.querySelector("input[name='completed']").checked;
    const priority = task.querySelector("select[name='priority']").value;
    const deadline = task.querySelector("input[name='deadline']").value;
    
    const subtasks = Array.from(task.querySelectorAll("#subtask-list")).map(subtask => {
      return {
        text: subtask.querySelector("input[name='subtask']").value,
        completed: subtask.querySelector("input[name='completed']").checked
      };
    });
    
    todos.push({ text, completed, priority, deadline, subtasks });
  });
  
  localStorage.setItem("todoData", JSON.stringify(todos));
}

export default saveToLocalStorage;