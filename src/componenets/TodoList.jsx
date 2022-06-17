import React, { useContext, useState } from "react";
import { TodoContext } from "./context/TodoContext";
import TodoItem from "./TodoItem";
import "./todoItem.css";

function TodoList() {
  const [todoList, setTodoList] = useContext(TodoContext);

  return (
    <>
      <ul
        className="d-flex flex-column justify-content-center align-item-center list-unstyled mt-5"
        style={{ width: "100%" }}
      >
        {todoList.map((todo, index) => {
          return <TodoItem todo={todo} key={index} indexedItem={index} />;
        })}
      </ul>
    </>
  );
}

export default TodoList;
