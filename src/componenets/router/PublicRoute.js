import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import Todo from "../Todo";
import Error from "../Error";

function PublicRoute() {
  return (
    <>
      <header className="p-3 bg-dark text-white"></header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/todo" element={<Todo></Todo>}></Route>
          <Route path="*" element={<Error></Error>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default PublicRoute;
