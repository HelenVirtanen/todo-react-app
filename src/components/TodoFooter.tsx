import React from "react";
import { Filter, TodoFooterProps } from "../types";
import TodoFilter from "./TodoFilter";

const TodoFooter: React.FC<TodoFooterProps> = ({ remaining, filter, setFilter, clearCompleted }) => (
  <div className="footer">
    <span>
      {remaining} item{remaining !== 1 ? "s" : ""} left
    </span>
    <TodoFilter filter={filter} setFilter={setFilter} />
    <button onClick={clearCompleted} aria-label="Clear completed tasks">
      Clear completed
    </button>
  </div>
);

export default TodoFooter;