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
