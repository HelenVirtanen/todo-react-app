import React from 'react';
import { TodoTaskProps } from '../../types';
import styles from './TodoTask.module.css';

const TodoTask: React.FC<TodoTaskProps> = ({ todo, onToggleCompleted }) => {
  return (
    <li
      className={`${styles.todoTask} ${todo.completed ? styles.completed : ''}`}
      onClick={() => onToggleCompleted(todo.id)}
    >
      <input className="visually-hidden" type="checkbox"></input>
      <span className={styles.pseudoCheckbox}></span>
      {todo.task}
    </li>
  );
};

export default TodoTask;
