import React from "react";
import { Todo } from "../types";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
}

const TodoTask: React.FC<Props> = ({ todo, onToggle }) => {
  return (
    <li
      className={todo.completed ? "todo__task completed" : "todo__task"}
      onClick={() => onToggle(todo.id)}
    >
      <input className="visually-hidden" type="checkbox"></input>
      <label htmlFor="{todo.id}" className="visually-hidden">{todo.task}</label>
      <span className="pseudo-checkbox"></span>
      {todo.task}
    </li>
  );
};

export default TodoTask;
