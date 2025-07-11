import React, { useState, useRef, useEffect } from 'react';
import { Task } from './types';
import TodoHeading from './components/TodoHeading';
import TodoInputToggle from './components/TodoInputToggle';
import TodoList from './components/TodoList';
import { Filter } from './types';
import TodoFooter from './components/TodoFooter';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Task[]>(() => {
    const stored = localStorage.getItem('todos');
    return stored ? JSON.parse(stored) : [];
  });
  const [isOpen, setIsOpen] = useState(true);
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState<Filter>('all');
  const listRef = useRef<HTMLUListElement>(null);
  const [height, setHeight] = useState('auto');

  const handleAddTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { id: Date.now(), task, completed: false }]);
    setTask('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const remaining = todos.filter((todo) => !todo.completed).length;

  useEffect(() => {
    if (listRef.current) {
      if (isOpen) {
        const scrollHeight = listRef.current.scrollHeight;
        setHeight(`${scrollHeight}px`);
      } else {
        setHeight('0px');
      }
    }
  }, [isOpen, filteredTodos.length]);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo">
      <TodoHeading />
      <div className="todo__content">
        <TodoInputToggle
          isOpen={isOpen}
          task={task}
          setIsOpen={setIsOpen}
          setTask={setTask}
          handleAddTodo={handleAddTodo}
        />
        <TodoList
          todos={filteredTodos}
          onToggleCompleted={toggleTodo}
          listRef={listRef}
          height={height}
        />
        <TodoFooter
          remaining={remaining}
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
};

export default App;
