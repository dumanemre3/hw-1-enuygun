import PublicRoute from "./componenets/router/PublicRoute";
import "./App.css";
import { TodoProvider } from "./componenets/context/TodoContext";
import Header from "./componenets/Header";
import { UserProvider } from "./componenets/context/UserContext";

function App() {
  return (
    <UserProvider>
      <TodoProvider>
        <PublicRoute></PublicRoute>
      </TodoProvider>
    </UserProvider>
  );
}

export default App;
