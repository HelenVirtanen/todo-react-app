export interface Task {
  id: number;
  task: string;
  completed: boolean;
}

export interface TodoTaskProps {
  todo: Task;
  onToggleCompleted: (id: number) => void;
}

export interface TodoInputToggleProps {
  isOpen: boolean;
  task: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: () => void;
}
