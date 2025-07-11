import React from 'react';
import { TodoFooterProps } from '../../types';
import TodoFilter from '../TodoFilter/TodoFilter';
import styles from './TodoFooter.module.css';

const TodoFooter: React.FC<TodoFooterProps> = ({
  remaining,
  filter,
  setFilter,
  clearCompleted,
}) => (
  <div className={styles.footer}>
    <span>
      {remaining} item{remaining !== 1 ? 's' : ''} left
    </span>
    <TodoFilter filter={filter} setFilter={setFilter} />
    <button onClick={clearCompleted} aria-label="Clear completed tasks">
      Clear completed
    </button>
  </div>
);

export default TodoFooter;
