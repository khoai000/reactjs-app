import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TodoList from "./pages/todo-firebase/TodoList";
import FloristPage from "./pages/florist/FloristPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FloristPage />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
