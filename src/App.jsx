import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import TodoList from "./pages/todo-firebase/TodoList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </>
  );
}

export default App;
