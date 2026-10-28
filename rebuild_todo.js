// 載入 localStorage：讀取 localStorage 的陣列，若無則指定為空陣列
// 驗收標準：重新整理
let todos = JSON.parse(localStorage.getItem("todos"));
if (todos === null) {
  todos = [];
}

// 儲存 localStorage：
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// 新增：監聽點擊、獲得資訊、加入資料陣列
// 儲存 localStorage、重畫
const apply = document.getElementById("apply");
const item = document.getElementById("item");
apply.addEventListener("click", addTodoItems);
item.addEventListener("keydown", (event) => {
  if (!event.isComposing && event.key === "Enter" && !event.repeat) {
    addTodoItems();
  }
});

function addTodoItems() {
  const itemText = item.value.trim();
  let repeat = false;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].itemText.toLowerCase() === itemText.toLowerCase()) {
      repeat = true;
      break;
    }
  }
  if (itemText !== "" && !repeat) {
    todos.push({ itemText: itemText, done: false });
    saveTodos();
    render();
  }
  item.value = "";
}

// 重畫 建立清單和刪除鈕、加回 HTML
function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  for (let i = 0; i < todos.length; i++) {
    const newTodoItem = document.createElement("li");
    const itemName = document.createElement("span");
    itemName.textContent = todos[i].itemText;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "刪除";
    newTodoItem.appendChild(itemName);
    newTodoItem.appendChild(deleteBtn);

    if (todos[i].done) {
      itemName.classList.add("done");
    }

    list.appendChild(newTodoItem);

    // 刪除：監聽點擊、從資料陣列中移除(splice)
    // 儲存 localStorage、重畫
    deleteBtn.addEventListener("click", function () {
      todos.splice(i, 1);
      saveTodos();
      render();
    });

    itemName.addEventListener("click", function () {
      todos[i].done = !todos[i].done;
      saveTodos();
      render();
    });
  }
}
render();

//
