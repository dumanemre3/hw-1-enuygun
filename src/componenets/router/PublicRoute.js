import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import Todo from "../Todo";
import Error from "../Error";
import Header from "../Header";
import UserContext from "../context/UserContext";

function PublicRoute() {
  const [user, setUser] = useContext(UserContext);
  return (
    <>
      {/* {user.length ? <Header></Header> : ""} */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {user.length && <Route path="/todo" element={<Todo></Todo>}></Route>}
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default PublicRoute;
