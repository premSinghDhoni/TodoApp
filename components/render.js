import store from "./store.js";

function render() {
  const ul=document.querySelector('.todoList');
  const elem = store.todos.map((item) => {
    return ` <li class="list" data-id="${item.id}">
    <span class="liTitle ${item.isCompleted? 'completed':''}" >${item.title}</span>
    <div class="liHandle">
      <input type="checkbox"${item.isCompleted ? 'checked' :''} class="todoCheck">
      <span class="X">X</span>
    </div>
  </li>`
  }).join('');
  ul.innerHTML=elem
}
export default render;
