import React from 'react';
import { TodoTaskProps } from '../types';

const TodoTask: React.FC<TodoTaskProps> = ({ todo, onToggleCompleted }) => {
  return (
    <li
      className={todo.completed ? 'todo__task completed' : 'todo__task'}
      onClick={() => onToggleCompleted(todo.id)}
    >
      <input className="visually-hidden" type="checkbox"></input>
      <span className="pseudo-checkbox"></span>
      {todo.task}
    </li>
  );
};

export default TodoTask;
