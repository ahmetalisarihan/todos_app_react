import { useState } from "react";
import Header from "./Header/Header";
import List from "./List/List";
import Footer from "./Footer/Footer";

function Todos() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [hide, setHide] = useState("All")
  
  return (
  <div className="todoapp">
    <Header todos={todos} setTodos={setTodos}/>{" "}
    <List todos={todos} setTodos={setTodos} hide={hide} />{" "}
    <Footer todos={todos} setTodos={setTodos} setHide={setHide}/>{" "}
  </div>
  )
}

export default Todos;
