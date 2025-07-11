export interface Task {
  id: number;
  task: string;
  completed: boolean;
}

export interface TodoTaskProps {
  todo: Task;
  onToggleCompleted: (id: number) => void;
}