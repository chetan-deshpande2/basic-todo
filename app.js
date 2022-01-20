// selectors

const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//event listners

const addTodo = (event) => {
  event.preventDefault();
  if (todoInput.value == "") {
    alert("Pls enter Task");
  } else {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); // to give class to div

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);
    // add todo to localstorage
    saveLocalTodos(todoInput.value);

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = `<i class ="fas fa-check"></i>`;
    completeBtn.classList.add("complete-btn");

    todoDiv.appendChild(completeBtn);
    // //edit btn
    // const editBtn = document.createElement("button");
    // editBtn.innerHTML = `<i class ="far fa-edit"></i>`;
    // editBtn.classList.add("edit-btn");

    // todoDiv.appendChild(editBtn);
    //trash btn
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = `<i class ="fas fa-trash"></i>`;
    trashBtn.classList.add("trash-btn");

    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);

    //clear todo input
    todoInput.value = "";
  }
};

const deleteCheckEdit = (e) => {
  const item = e.target;
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    removeLocalTodos(todo);
    todo.remove();
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
  // if (item.classList[0] === "edit-btn") {
  //   const todo = e.firstChild.node;
  //   let editValue = prompt("Edit The Item", todo);
  // }
};

const filterTodo = (e) => {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;

      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
};

const saveLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);

  localStorage.setItem("todos", JSON.stringify(todos));
  console.log(todos);
};

const getTodos = (todo) => {
  console.log("he");
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo"); // to give class to div

    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");

    todoDiv.appendChild(newTodo);

    const completeBtn = document.createElement("button");
    completeBtn.innerHTML = `<i class ="fas fa-check"></i>`;
    completeBtn.classList.add("complete-btn");

    todoDiv.appendChild(completeBtn);
    //edit btn
    const editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class ="far fa-edit"></i>`;
    editBtn.classList.add("edit-btn");

    todoDiv.appendChild(editBtn);
    //trash btn
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = `<i class ="fas fa-trash"></i>`;
    trashBtn.classList.add("trash-btn");

    todoDiv.appendChild(trashBtn);

    todoList.appendChild(todoDiv);

    //clear todo input
    todoInput.value = "";
  });
};

const removeLocalTodos = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
};
document.addEventListener("DOMContentLoaded", getTodos);
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheckEdit);
filterOption.addEventListener("click", filterTodo);
