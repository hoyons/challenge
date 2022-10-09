const toDoForm = document.getElementById("todo");
const ToDoInput = document.querySelector("#todo input");
const ToDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let arrayToDos = [];

function paintToDoList(newToDo) {
  const createdLi = document.createElement("li");
  createdLi.id = newToDo.id;
  const createdSpan = document.createElement("span");
  createdSpan.innerText = newToDo.text;
  const createdButton = document.createElement("button");
  createdButton.id = "todo_button";
  createdButton.innerText = "✔";
  createdButton.addEventListener("click", deleteToDo);
  createdLi.appendChild(createdSpan);
  createdLi.appendChild(createdButton);
  ToDoList.appendChild(createdLi);
}

function handleToDo(event) {
  event.preventDefault();
  const submitedToDo = ToDoInput.value;
  ToDoInput.value = "";
  const newToDoObj = {
    text: submitedToDo,
    id: Date.now(),
  };
  arrayToDos.push(newToDoObj);
  paintToDoList(newToDoObj);
  ToDosSave();
}

toDoForm.addEventListener("submit", handleToDo);

function deleteToDo(event) {
  const eventLi = event.target.parentElement;
  console.log(eventLi.id);
  eventLi.remove();

  arrayToDos = arrayToDos.filter((item) => item.id !== parseInt(eventLi.id));
  console.log(arrayToDos);
  ToDosSave();
}

function ToDosSave() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(arrayToDos));
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  arrayToDos = parsedToDos;
  parsedToDos.forEach(paintToDoList);
}
