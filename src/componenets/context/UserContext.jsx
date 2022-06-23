import { createContext } from "react";
import { useState, useEffect } from "react";

export const UserContext = createContext();

function getInitialState() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
}

export const UserProvider = (props) => {
  const [user, setUser] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;

// import { useEffect } from "react";
// import { useState, createContext } from "react";

// export const UserContext = createContext();

// function getInitialState() {
//   const userInfo = localStorage.getItem("user");
//   return userInfo ? JSON.parse(userInfo) : [];
// }

// export const UserProvider = (props) => {
//   const [userInfo, setUserInfo] = useState(getInitialState);

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(userInfo));
//   }, [userInfo]);

//   return (
//     <UserContext.Provider value={[userInfo, setUserInfo]}>
//       {props.children}
//     </UserContext.Provider>
//   );
// };

// export default UserContext;
