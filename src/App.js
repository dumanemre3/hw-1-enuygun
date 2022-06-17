import PublicRoute from "./componenets/router/PublicRoute";
import "./App.css";
import { TodoProvider } from "./componenets/context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <PublicRoute></PublicRoute>
    </TodoProvider>
  );
}

export default App;
