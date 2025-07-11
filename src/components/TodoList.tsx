import React from 'react';
import { TodoListProps } from '../types';
import TodoTask from './TodoTask';

const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggleCompleted,
  listRef,
  height,
}) => (
  <ul ref={listRef} className="todo-list" style={{ maxHeight: height }}>
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
