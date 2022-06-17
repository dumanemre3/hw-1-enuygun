import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import Todo from "../Todo";

function PublicRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/todo" element={<Todo></Todo>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default PublicRoute;
