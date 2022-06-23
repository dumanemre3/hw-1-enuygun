import React, { useState, useContext } from "react";
import TodoList from "./TodoList";
import { TodoContext } from "./context/TodoContext";
import "./todo.css";
import { FcSearch } from "react-icons/fc";
import UserContext from "./context/UserContext";
import { useNavigate } from "react-router-dom";

function Todo() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [user, setUser] = useContext(UserContext);

  const handleLogOut = () => {
    setUser("");
    navigate("/login");
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = todoList.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.length != 0) {
      // BUG VAR
      setTodoList([
        ...todoList,
        { name: todo, isCompleted: false, id: Math.floor(Math.random() * 100) },
      ]);
      // console.log(todo, todoList);
      setTodo("");
      // BUG VAR
    } else {
      alert("Data gir.");
    }
    // BUG VAR.
  };

  // const filterList = () => {};

  // setTodoList(
  //   todoList?.map((todo, index) => {
  //     console.log(todo);
  //   })
  // );
  // {
  //   todoList.filter((todos) => todos.include(setSearch(search)));
  // }
  // console.log(search);

  // todoList.map((todo, index) => {
  //   return console.log(todo.name);
  // });

  return (
    <>
      <header className="p-3 bg-dark text-white">
        <div className="row mx-5">
          <div className="col mt-1">{`Hoşgeldin ${user}, bu sayfada yapılacak işlerini girebilirsin.`}</div>
          <button
            className="btn btn-danger col-md-1 d-flex justify-content-end justify-content-center"
            onClick={() => handleLogOut()}
          >
            ÇIKIŞ YAP
          </button>
        </div>
      </header>
      <h3 className="heading-title text-center py-5">Yapılacaklar Listesi</h3>
      <form className="todoList my-5" onSubmit={handleSubmit}>
        <label className="fs-5">
          <span className="me-2"> Yapılacaklar: </span>
          <input
            className="input-todo"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Todo"
          ></input>
        </label>

        <span className="ms-2"></span>
        <button className="btn btn-success " type="submit">
          EKLE BUTONU
        </button>

        <label className="mx-5">
          <input
            className="input-todo"
            type="text"
            name="search"
            value={wordEntered}
            onChange={handleFilter}
            placeholder="Search in Todos"
          ></input>
          <FcSearch
            className="justify-content-center mb-1 mx-1"
            size={30}
          ></FcSearch>
        </label>
      </form>

      {/* {console.log(filteredData)}
      {filteredData?.length > 1 ? (
        <TodoList data={filteredData}></TodoList>
      ) : (
        <TodoList data={todoList}></TodoList>
      )} */}
      {/* {filteredData == "" ? (
        <TodoList data={todoList}></TodoList>
      ) : (
        <TodoList data={filteredData}></TodoList>
      )} */}
      {wordEntered === "" ? (
        <TodoList data={todoList}></TodoList>
      ) : filteredData.length > 0 ? (
        <TodoList data={filteredData}></TodoList>
      ) : (
        <>
          <div className="d-flex justify-content-center column">
            <div className="no-search fs-3 ">
              Aramanıza uygun herhangi bir todo bulunamamıştır.
              <div className="d-flex justify-content-center">
                <button
                  className="mt-3 btn btn-warning "
                  onClick={() => {
                    setWordEntered("");
                  }}
                >
                  Todolarımı Tekrar Listele
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Todo;
