import React from "react";
import { Todo } from "../types";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, onToggle }) => {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
        padding: '8px 0',
      }}
    >
      {todo.task}
    </li>
  );
};

export default TodoItem;