export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

const STORAGE_KEY = "todos";

export function createTodo(text: string): Todo {
  return {
    id: Math.random().toString(36).substr(2, 9),
    text,
    completed: false,
    createdAt: Date.now(),
  };
}

export function loadTodos(): Todo[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return [];
  
  try {
    const todos = JSON.parse(stored);
    saveTodos(todos);
    return todos;
  } catch {
    return [];
  }
}

export function saveTodos(todos: Todo[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}
