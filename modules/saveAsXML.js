// XML保存
function saveAsXML() {
  const todos = document.querySelectorAll("#task-list");
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<todos>\n';
  todos.forEach(task => {
    const text = task.querySelector("input[type='text']").value;
    const completed = task.querySelector("input[type='checkbox']").checked;
    const priority = task.querySelector("select").value;
    xml += `  <todo completed="${completed}" priority="${priority}">${text}\n`;
    const subtasks = task.querySelectorAll("#subtask-list");
    subtasks.forEach(subtask => {
      const subText = subtask.querySelector("input[type='text']").value;
      const subCompleted = subtask.querySelector("input[type='checkbox']").checked;
      xml += `    <subtask completed="${subCompleted}">${subText}</subtask>\n`;
    });
    xml += `  </todo>\n`;
  });
  xml += '</todos>';

  const blob = new Blob([xml], { type: "application/xml" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "todos.xml";
  a.click();
}
window.saveAsXML = saveAsXML;
export default saveAsXML;