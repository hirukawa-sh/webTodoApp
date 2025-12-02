import createSubtaskElement from "createSubtaskElement";

// タスク追加
function addTodo(text = "", checked = false, priority = "ℹ️低", subtasks = []) {
  const root = document.getElementById("todoList");

  // タスク全体をラップ
  const container = document.createElement("div");
  container.id = "task-list";
  container.className = "d-flex flex-column mb-2";

  // 入力の受け取り
  const input = document.getElementById("todoInput");
  if (text === "") {
    text = input.value.trim();
    if (text === "") return;
  }

  // 項目の追加
  const item = document.createElement("label");
  item.className = "d-flex flex-row gap-2 flex-wrap bg-light bg-gradient custom-border p-2";
  item.id = "todo-item";

  //ドラッグ機能を追加
  /*
  let draggedItem = null;
   
  container.draggable = true;
  container.ondragstart = (e) => {
    e.dataTransfer.setData("text/plain", null);
    draggedItem = container;
  };
  
  container.ondragover = (e) => {
    e.preventDefault();
  };
  
  container.ondrop = (e) => {
    e.preventDefault();
    const todoList = document.getElementById("todoList");
    if (draggedItem !== container) {
      todoList.insertBefore(draggedItem, container.nextSibling);
      saveToLocalStorage(); // 並び替え後に保存
    }
  };
  */

  // タスク完了チェックボックス
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input";
  checkbox.checked = checked;
  checkbox.onchange = () => {
    item.classList.toggle("bg-light");
    item.classList.toggle("bg-success", checkbox.checked);
  };
  // 起動時、既にチェック済みの時
  if (checked) {
    item.classList.toggle("bg-light");
    item.classList.toggle("bg-success", checkbox.checked);
  }
  // ラップ
  const checkboxCol = document.createElement("div");
  checkboxCol.className = "col-auto p-2";
  checkboxCol.appendChild(checkbox);

  // タスク
  const task = document.createElement("input");
  task.type = "text";
  task.className = "form-control";
  task.value = text;
  // ラップ
  const taskCol = document.createElement("div");
  taskCol.className = "col-12 col-md-5 col-lg-6";
  taskCol.appendChild(task);

  // 重要度セレクト
  const select = document.createElement('select');
  select.className = "form-select";
  select.ariaLabel = "Default select";
  // メニュー項目の追加
  const items = ["💥高", "⚠️中", "ℹ️低"];
  items.forEach(text => {
    const option = document.createElement('option');
    option.textContent = text;
    option.value = text;
    select.appendChild(option);
  });
  
  // ボタン要素の作成
  /*
  const button = document.createElement('button');
  button.className = 'btn btn-secondary dropdown-toggle';
  button.type = 'button';
  button.id = 'dropdownMenuButton';
  button.setAttribute('data-bs-toggle', 'dropdown');
  button.setAttribute('aria-expanded', 'false');
  button.textContent = '優先度';

  // ドロップダウンメニューの作成
  const menu = document.createElement('ul');
  menu.className = 'dropdown-menu';
  menu.setAttribute('aria-labelledby', 'dropdownMenuButton');

  // メニュー項目の追加
  const items = ["💥高", "⚠️中", "ℹ️低"];
  items.forEach(text => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.className = 'dropdown-item';
    a.href = '#';
    a.textContent = text;
    li.appendChild(a);
    menu.appendChild(li);
  });
  */
  // ラップ
  const priorityCol = document.createElement('div');
  priorityCol.className = "col-auto";
  priorityCol.appendChild(select);

  // 期限
  const deadline = document.createElement("input");
  deadline.type = "date";
  deadline.className = "form-control";
  deadline.value = Date.now;
  // ラップ
  const deadlineCol = document.createElement("div");
  deadlineCol.className = "col-auto";
  deadlineCol.appendChild(deadline);

  // サブタスク追加ボタン
  const subBtn = document.createElement("button");
  subBtn.textContent = "＋サブタスク";
  subBtn.className = "form-control btn btn-secondary bg-gradient";
  subBtn.onclick = () => {
    const subLi = createSubtaskElement("", false);
    subtaskList.appendChild(subLi);
  };
  // ラップ
  const subBtnCol = document.createElement("div");
  subBtnCol.className = "col-12 col-md-auto";
  subBtnCol.appendChild(subBtn);

  // 削除ボタン
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "削除";
  deleteBtn.className = "form-control btn btn-danger bg-gradient";
  deleteBtn.onclick = () => container.remove();
  // ラップ
  const deleteBtnCol = document.createElement("div");
  deleteBtnCol.className = "col-12 col-md-auto ms-auto";
  deleteBtnCol.appendChild(deleteBtn);

  // サブタスクリスト
  const subtaskList = document.createElement("div");
  subtaskList.className = "ps-3";
  // 既存のサブタスクを復元
  subtasks.forEach(sub => {
    const subLi = createSubtaskElement(sub.text, sub.completed);
    subtaskList.appendChild(subLi);
  });

  // コントロール追加
  item.appendChild(checkboxCol);
  item.appendChild(priorityCol);
  item.appendChild(deadlineCol);
  item.appendChild(taskCol);
  item.appendChild(subBtnCol);
  item.appendChild(deleteBtnCol);
  container.appendChild(item);
  container.appendChild(subtaskList);

  root.appendChild(container);
  input.value = "";
}

export default addTodo;