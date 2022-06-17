import React, { useState, useEffect, useContext } from "react";
import TodoContext from "./context/TodoContext";

const TodoItem = ({ todo, indexedItem }) => {
  const [todoList, setTodoList] = useContext(TodoContext);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setIsChecked(todo.isCompleted);
  }, [todo]);

  const handleDelete = (index) => {
    setTodoList([...todoList.filter((todo, i) => index !== i)]);
  };

  const handleChecked = (completed) => {
    setTodoList(
      todoList.map((item, key) =>
        item.id === todo.id ? { ...item, isCompleted: completed } : item
      )
    );
  };

  return (
    <li>
      <form className="text-center my-1 d-flex justify-content-evenly mx-5">
        <div className="" stlye={{ flex: 4 }}>
          <label>
            <input
              type="checkbox"
              key={todo.id}
              checked={isChecked}
              onChange={() => {
                handleChecked(!isChecked);
                setIsChecked(!isChecked);
              }}
            />
          </label>
          {isChecked && (
            <span style={{ textDecoration: "line-through" }} className="ms-2">
              {todo.name}
            </span>
          )}
          {!isChecked && <span className="ms-2"> {todo.name} </span>}
        </div>
        <div className="text-end" style={{ flex: 1 }}>
          <button
            className="btn btn-info btn-sm"
            onClick={() => handleDelete(indexedItem)}
          >
            Sil
          </button>
        </div>
      </form>
    </li>
  );
};

export default TodoItem;
