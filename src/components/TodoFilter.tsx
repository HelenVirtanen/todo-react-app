import React from 'react';
import { TodoFilterProps } from '../types';

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      <button
        type="button"
        aria-pressed={filter === 'all'}
        className={`filters__button ${filter === 'all' ? 'selected' : ''}`}
        onClick={() => setFilter('all')}
      >
        <span className="visually-hidden">Show </span>
        All
        <span className="visually-hidden">tasks </span>
      </button>
      <button
        type="button"
        aria-pressed={filter === 'active'}
        className={`filters__button ${filter === 'active' ? 'selected' : ''}`}
        onClick={() => setFilter('active')}
      >
        <span className="visually-hidden">Show </span>
        Active
        <span className="visually-hidden"> tasks </span>
      </button>
      <button
        type="button"
        aria-pressed={filter === 'completed'}
        className={`filters__button ${filter === 'completed' ? 'selected' : ''}`}
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
