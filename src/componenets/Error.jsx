import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./context/UserContext";

function Error() {
  const [user, setUser] = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <p className="fs-3">
            <span className="text-danger">Opps!</span> Maalesef sayfa yok.
          </p>
          {console.log(user)}
          {user.length ? (
            <>
              <p className="lead">Aradığınız sayfa bulunmamaktadır.</p>
              <button
                href="index.html"
                className="btn btn-primary"
                onClick={() => navigate("/todo")}
              >
                Todo Sayfasına Gidin
              </button>
            </>
          ) : (
            <>
              <p className="lead">
                Aradığınız sayfa bulunmamaktadır. Lütfen giriş yaparak tekrar
                deneyiniz.
              </p>
              <button
                href="index.html"
                className="btn btn-primary"
                onClick={() => navigate("/login")}
              >
                Login Sayfasına Gidin
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Error;
