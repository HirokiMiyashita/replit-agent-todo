import { useEffect, useState } from "react";
import { TodoList } from "@/components/TodoList";
import { CreateTodo } from "@/components/CreateTodo";
import { motion } from "framer-motion";
import { Todo, loadTodos } from "@/lib/todo";

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    setTodos(loadTodos());
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-2xl"
      >
        <header className="mb-12 text-center">
          <h1 className="mb-2 font-sans text-3xl font-light tracking-wide text-stone-800">
            やるべきこと
          </h1>
          <p className="text-sm text-stone-500">Tasks for today</p>
        </header>
        
        <CreateTodo onTodoCreated={(todo) => setTodos([...todos, todo])} />
        
        <div className="mt-8">
          <TodoList 
            todos={todos}
            onTodoToggle={(id) => {
              setTodos(todos.map(todo => 
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
              ));
            }}
            onTodoDelete={(id) => {
              setTodos(todos.filter(todo => todo.id !== id));
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}
