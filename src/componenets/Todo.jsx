import React, { useState, useContext } from "react";
import TodoList from "./TodoList";
import { TodoContext } from "./context/TodoContext";
import "./todo.css";

function Todo() {
  const [todoList, setTodoList] = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length) {
      setTodoList([
        ...todoList,
        { name: todo, isCompleted: false, id: Math.floor(Math.random() * 100) },
      ]);
      // console.log(todo, todoList);
      setTodo("");
    }
  };

  return (
    <>
      <h2 className="d-flex justify-content-center mt-5">
        - Yapılacaklar Listesi -
      </h2>
      <form className="todoList" onSubmit={handleSubmit}>
        <label className="fs-5">
          <span className="me-2"> Yapılacaklar: </span>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          ></input>
        </label>
        <span className="ms-2"></span>
        <button className="btn btn-danger " type="submit">
          EKLE BUTONU
        </button>
      </form>
      <TodoList></TodoList>
    </>
  );
}

export default Todo;
