import { useState, useEffect } from "react";

function Header({ todos, setTodos }) {
  const [form, setForm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (form === "") {
    }

    setTodos([
      ...todos,
      {
        id: todos.lenght > 0 ? todos[todos.lenght - 1].id + 1 : 0,
        todo: form,
        checked: false,
      },
    ]);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={form}
          onChange={(e) => setForm(e.target.value)}
        />
      </form>
    </header>
  );
}

export default Header;
