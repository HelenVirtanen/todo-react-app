import React from 'react';
import { TodoListProps } from '../../types';
import TodoTask from '../TodoTask/TodoTask';
import styles from './TodoList.module.css';

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleCompleted,
  listRef,
  height,
}) => (
  <ul ref={listRef} className={styles.todoList} style={{ maxHeight: height }}>
    {todos.map((todo) => (
      <TodoTask
        key={todo.id}
        todo={todo}
        onToggleCompleted={onToggleCompleted}
      />
    ))}
  </ul>
);

export default TodoList;
