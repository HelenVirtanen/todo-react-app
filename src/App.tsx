import React, { useState } from "react";
import { Todo } from "./types";
import TodoItem from "./components/TodoTask";

type Filter = "all" | "active" | "completed";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isOpen, setIsOpen] = useState(true);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
    setTask("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const remaining = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo">
      <h1 className="todo__heading">todos</h1>
      <div className="todo__content">
        <div className={`todo__dropdown ${isOpen ? "open" : ""}`}>
          <label htmlFor="new-task__input" className="visually-hidden">
            What needs to be done
          </label>
          <input
            className="new-task__input"
            value={task}
            onClick={() => setIsOpen(!isOpen)}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTodo()}
            placeholder="What needs to be done?"
          />
        </div>
        {isOpen && (
          <ul className="todo-list">
            {filteredTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
            ))}
          </ul>
        )}
        <div className="footer">
          <span>
            {remaining} item{remaining !== 1 ? "s" : ""} left
          </span>
          <div className="filters">
            <button
              type="button"
              aria-pressed="true"
              className={`filters__button ${
                filter === "all" ? "selected" : ""
              }`}
              onClick={() => setFilter("all")}
            >
              <span className="visually-hidden">Show </span>
              All
              <span className="visually-hidden">tasks </span>
            </button>
            <button
              type="button"
              aria-pressed="false"
              className={`filters__button ${
                filter === "active" ? "selected" : ""
              }`}
              onClick={() => setFilter("active")}
            >
              <span className="visually-hidden">Show </span>
              Active
              <span className="visually-hidden">tasks </span>
            </button>
            <button
              type="button"
              aria-pressed="false"
              className={`filters__button ${
                filter === "completed" ? "selected" : ""
              }`}
              onClick={() => setFilter("completed")}
            >
              <span className="visually-hidden">Show </span>
              Completed
              <span className="visually-hidden">tasks </span>
            </button>
          </div>
          <button onClick={clearCompleted} aria-label="Clear completed tasks">
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
