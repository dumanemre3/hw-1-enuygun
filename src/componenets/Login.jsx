import React, { useState, useContext } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import mockData from "../service/mock.json";
import { useEffect } from "react";
import UserContext from "./context/UserContext";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userDatas, setUserData] = useState(mockData);
  const [user, setUser] = useContext(UserContext);

  const handleLogIn = () => {
    let control = false;
    userDatas.map((datas) => {
      if (email === datas.email && password === datas.password) {
        control = true;
        setUser(datas.name);
        console.log(datas.name);
      }
    });
    if (control) navigate("/todo");
    else alert("Kullanıcının mail adresi veya şifresi hatalıdır.");
  };

  return (
    <section className="vh-max">
      <div className="container-fluid ">
        <div className="row">
          <div className="col-sm-6 text-black">
            <div className="px-5 ms-xl-4">
              <i
                className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                style={{ color: "#709085" }}
              ></i>
            </div>

            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5 mt-10">
              <form style={{ width: "23rem" }}>
                <h3 className="fs-3 mb-1 pb-3">LOG IN</h3>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example18">
                    Email address
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="form2Example18"
                    className="form-control form-control-lg mb-2"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example28">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="form2Example28"
                    className="form-control form-control-lg mb-2"
                  />
                </div>

                <div className="pt-1 mb-4">
                  <button
                    className="btn btn-success btn-lg btn-block form-control fs-4"
                    type="button"
                    onClick={() => handleLogIn()}
                  >
                    GİRİŞ YAP
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block">
            <img
              src="/img/enuygun-logo.jpeg"
              alt="Login image"
              className="w-100 vh-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
