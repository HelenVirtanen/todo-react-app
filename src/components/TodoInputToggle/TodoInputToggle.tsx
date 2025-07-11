import React from 'react';
import { TodoInputToggleProps } from '../../types';
import styles from './TodoInputToggle.module.css';

const TodoInputToggle: React.FC<TodoInputToggleProps> = ({
  isOpen,
  task,
  setIsOpen,
  setTask,
  handleAddTodo,
}) => {
  return (
    <div className={styles.todoDropdown}>
      <button
        type="button"
        className={`${styles.toggleArrow} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle todo list"
      />
      <label htmlFor="new-task__input" className="visually-hidden">
        What needs to be done
      </label>
      <input
        id="new-task__input"
        className={styles.newTaskInput}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
        placeholder="What needs to be done?"
      />
    </div>
  );
};

export default TodoInputToggle;
