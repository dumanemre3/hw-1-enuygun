import { useEffect } from "react";
import { useState, createContext } from "react";

export const TodoContext = createContext();

function getInitialState() {
  const todos = localStorage.getItem("todoList");
  return todos ? JSON.parse(todos) : [];
}

export const TodoProvider = (props) => {
  const [todoList, setTodoList] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <TodoContext.Provider value={[todoList, setTodoList]}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
