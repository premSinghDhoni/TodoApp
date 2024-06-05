const store = {
  todos: [
    { id: "1", title: "go run", isCompleted: true },
    { id: "2", title: "go to gym", isCompleted: false },
    { id: "3", title: "go to study", isCompleted: true },
    { id: "4", title: "do yoga", isCompleted: false },
    { id: "5", title: "meeting at 5", isCompleted: true },
  ],
};

const storeHandler = {
  get(target, property) {
    // console.log(target,property);
    return target[property];
  },
  set(target, property, value) {
    target[property]=value;
    // console.log(property);
    if(property === 'todos'){
      window.dispatchEvent(new Event('todosChange'));
    }
    return true
  },
};
const storeProxy = new Proxy(store, storeHandler);
function addTodo(newTodo){
storeProxy.todos=[...storeProxy.todos,newTodo]
}
function removeTodo(id){
  storeProxy.todos=storeProxy.todos.filter(items=>items.id !== id)
}
function toggleChk(id,completed){
  storeProxy.todos=storeProxy.todos.map(items=>{
    if(items.id=== id){
      return{...items,isCompleted:completed}
    }
    else{
      return items;
    }
  })
}
export {addTodo ,removeTodo,toggleChk}
export default storeProxy;
