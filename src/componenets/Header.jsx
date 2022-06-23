import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "./context/UserContext";

function Header() {
  // const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const handleLogOut = () => {
    setUser("");
    // navigate("/login");
  };
  return (
    <div>
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
    </div>
  );
}

export default Header;
