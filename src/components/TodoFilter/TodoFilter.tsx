import React from 'react';
import { TodoFilterProps } from '../../types';
import styles from './TodoFilter.module.css';

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className={styles.filters}>
      <button
        type="button"
        aria-pressed={filter === 'all'}
        className={`${styles.filtersButton} ${filter === 'all' ? styles.selected : ''}`}
        onClick={() => setFilter('all')}
      >
        <span className="visually-hidden">Show </span>
        All
        <span className="visually-hidden">tasks </span>
      </button>
      <button
        type="button"
        aria-pressed={filter === 'active'}
        className={`${styles.filtersButton} ${filter === 'active' ? styles.selected : ''}`}
        onClick={() => setFilter('active')}
      >
        <span className="visually-hidden">Show </span>
        Active
        <span className="visually-hidden"> tasks </span>
      </button>
      <button
        type="button"
        aria-pressed={filter === 'completed'}
        className={`${styles.filtersButton} ${filter === 'completed' ? styles.selected : ''}`}
        onClick={() => setFilter('completed')}
      >
        <span className="visually-hidden">Show </span>
        Completed
        <span className="visually-hidden"> tasks </span>
      </button>
    </div>
  );
};

export default TodoFilter;
