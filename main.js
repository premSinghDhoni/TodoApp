import render from "./components/render.js";
import store from "./components/store.js";
import { addTodo, removeTodo,toggleChk } from "./components/store.js";

window.addEventListener("todosChange", (e) => {
  // console.log(e);
  render();
});
// store.todos=[];

render();

const form = document.querySelector(".todoForm");
const input = document.querySelector(".todoInput");
const ul = document.querySelector("ul");

form.addEventListener("submit", (eve) => {
  eve.preventDefault();
  const title = input.value;
  const newTodo = { id: crypto.randomUUID(), title: title, isCompleted: false };
  if (input.value.trim() === "") {
  } else {
    addTodo(newTodo);
    input.value = "";
  }
});

ul.addEventListener("click", (e) => {
  if (e.target.textContent === "X") {
    const id = e.target.parentNode.parentNode.dataset.id;
    removeTodo(id);
  }
});

ul.addEventListener("change", (e) => {
  if(e.target.classList.contains('todoCheck')){
    const id = e.target.parentNode.parentNode.dataset.id;
    // console.log(id);
    const checked=e.target.checked;
    toggleChk(id,checked)
  }
});
