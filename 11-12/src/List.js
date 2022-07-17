import { useState } from "react";
function List() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  function submit() {
    todoList.push(todo);
    if(todoList===""){
      return false;
    }
    setTodoList([...todoList]);
    setTodo("");
    
  }
  return (
    <div className="todo">
      {todoList.map((value, index) => {
        return (
          <div key={index}>
            {index + 1} : {value}
            <br />
          </div>
        );
      })}
      <input
        type="text"
        placeholder="Todo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={() => submit()}>Submit Todo</button>
    </div>
  );
}
export default List;
