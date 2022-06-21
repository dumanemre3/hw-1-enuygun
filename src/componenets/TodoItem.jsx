import React, { useState, useEffect, useContext } from "react";
import TodoContext from "./context/TodoContext";
import { EditText, EditTextarea } from "react-edit-text";
import "./todoItem.css";

const TodoItem = ({ todo, setTodo, indexedItem }) => {
  const [todoList, setTodoList] = useContext(TodoContext);
  const [isChecked, setIsChecked] = useState(false);
  const [onEdit, setOnEdit] = useState(false);

  useEffect(() => {
    setIsChecked(todo.isCompleted);
  }, [todo]);

  useEffect(() => {
    setOnEdit(todo.name);
  }, [todo.name]);

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

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleEdit = (index, e) => {
    // setTodoList(
    //   todoList.map((item, key) =>
    //     item.id === todo.id ? { ...item, name: todo } : item
    //   )
    // );
    // localStorage.setItem("todoList", JSON.stringify(todoList));
    // setOnEdit([...todoList.filter((todo, i) => index !== i)]);
    // const tempIndex = index;
    // setTodoList(tempIndex);
    // console.log("1aaa", tempIndex);
    // setOnEdit(tempIndex);
    // console.log("todo", todo);
    // console.log(setTodo);
  };

  return (
    <li>
      <form className="text-center my-1 d-flex justify-content-evenly mx-5">
        <div className="control-form">
          <input
            className=""
            type="checkbox"
            key={todo.id}
            checked={isChecked}
            onChange={() => {
              handleChecked(!isChecked);
              setIsChecked(!isChecked);
            }}
          />

          {isChecked && (
            <label>
              <EditText
                className="ms-2"
                style={{ textDecoration: "line-through" }}
                name="textbox1"
                key={todo.name}
                defaultValue={todo.name}
                inputClassName="bg-light"
                onChange={() => {
                  handleEdit();
                  setOnEdit(!onEdit);
                }}
              />
            </label>
          )}
          {!isChecked && (
            <label>
              <EditText
                className="ms-2"
                name="textbox1"
                defaultValue={todo.name}
                inputClassName="bg-light"
                onChange={() => handleEdit()}
              />
            </label>
          )}

          {/* {isChecked && (
            <span style={{ textDecoration: "line-through" }} className="ms-2">
              {todo.name}
            </span>
          )}
          {!isChecked && <span className="ms-2"> {todo.name} </span>} */}
        </div>
        <div className="text-end" style={{ flex: 1 }}>
          <button
            className="btn btn-warning btn-sm mx-2"
            onClick={(e) => {
              e.preventDefault();
              handleEdit(indexedItem);
            }}
          >
            Düzenle
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={(e) => {
              e.preventDefault();
              handleDelete(indexedItem);
            }}
          >
            Sil
          </button>
        </div>
      </form>
    </li>
  );
};

export default TodoItem;
