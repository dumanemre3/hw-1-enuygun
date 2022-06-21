import React, { useContext, useState } from "react";
import { TodoContext } from "./context/TodoContext";
import TodoItem from "./TodoItem";
import "./todoItem.css";

function TodoList({ data }) {
  const [todoList, setTodoList] = useContext(TodoContext);

  return (
    <>
      <div className="row g-0 justify-content-center mb-5">
        <div className="col-9">
          <ul className="list-item d-flex flex-column justify-content-center align-item-center list-unstyled">
            {data.map((todo, index) => {
              return <TodoItem todo={todo} key={index} indexedItem={index} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TodoList;
