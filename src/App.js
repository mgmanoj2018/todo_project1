import React, { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
const App = () => {
  //console.log(uuid())
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleAdd = (id) => {
    setTodoList([...todoList, { id: uuid(), todo: todo, isComleted: false }]);
    console.log(todoList);
    // setTodo("");
  };

  const checkHandle = (id) => {
    const updateTodoList = todoList.map(newList=>
      newList.id === id ? { ...newList, isComleted: !newList.isComleted } : newList
    );
    console.log(updateTodoList);
    setTodoList(updateTodoList);
  };
  const deleteHandle = (id) => {
    const fileterTodo = todoList.filter((newTodo) => newTodo.id !== id);
    setTodoList(fileterTodo);
  };

  return (
    <div className="App">
      <div className="wishListContainer">
        <h1>Add Wish List</h1>
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          value={todo}
          placeholder="add Wish List"
        />
        <button onClick={handleAdd} className="btn">
          Add
        </button>
      </div>
      <div>
        {todoList?.length > 0 &&
          todoList.map((item) => (
            <div key={item.id}>
              <span>
                <input  type="checkbox" onClick={() => checkHandle(item.id)} />
              </span>
             <span className={item.isComleted ? "mark":""}>{item.todo}</span>
                           <span>
                <button onClick={() => deleteHandle(item.id)}>delete</button>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
