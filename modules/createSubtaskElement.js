// サブタスク追加
function createSubtaskElement(text, completed) {
  const subLi = document.createElement("label");
  subLi.className = 'd-flex flex-row bg-light bg-gradient custom-border gap-3 p-3';
  subLi.id = "subtask-list";

  // チェックボックス
  const subCheckbox = document.createElement("input");
  subCheckbox.type = "checkbox";
  subCheckbox.className = "form-check-input"
  subCheckbox.checked = completed;
  subCheckbox.onchange = () => {
    subLi.classList.toggle("bg-light");
    subLi.classList.toggle("bg-success", subCheckbox.checked);
  };
  // 起動時、既にチェック済みの時
  if (completed) {
    subLi.classList.toggle("bg-light");
    subLi.classList.toggle("bg-success", subCheckbox.checked);
  }
  // ラップ
  const subCheckCol = document.createElement("div");
  subCheckCol.className = "p-2";
  subCheckCol.appendChild(subCheckbox);

  // サブタスク
  const subTask = document.createElement("input");
  subTask.type = "text";
  subTask.placeholder = "サブタスクを入力";
  subTask.value = text;
  subTask.className = "form-control";
  // ラップ
  const subTaskCol = document.createElement("div");
  subTaskCol.className = "col";
  subTaskCol.appendChild(subTask);

  // 削除ボタン
  const subDeleteBtn = document.createElement("button");
  subDeleteBtn.textContent = "削除";
  subDeleteBtn.className = "form-control btn btn-danger bg-gradient";
  subDeleteBtn.onclick = () => subLi.remove();
  // ラップ
  const subDeleteBtnCol = document.createElement("div");
  subDeleteBtnCol.className = "ms-auto";
  subDeleteBtnCol.appendChild(subDeleteBtn);

  subLi.appendChild(subCheckCol);
  subLi.appendChild(subTaskCol);
  subLi.appendChild(subDeleteBtnCol);

  return subLi;
}

export default createSubtaskElement;