import React from "react";
import { TodoInputToggleProps } from "../types";

const TodoInputToggle: React.FC<TodoInputToggleProps> = ({
  isOpen,
  task,
  setIsOpen,
  setTask,
  handleAddTodo,
}) => {
  return (
    <div className="todo__dropdown">
      <button
        type="button"
        className={`toggle-arrow ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle todo list"
      />
      <label htmlFor="new-task__input" className="visually-hidden">
        What needs to be done
      </label>
      <input
        id="new-task__input"
        className="new-task__input"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
        placeholder="What needs to be done?"
      />
    </div>
  );
};

export default TodoInputToggle;
