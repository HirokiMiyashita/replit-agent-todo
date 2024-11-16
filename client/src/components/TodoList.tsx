import { motion, AnimatePresence } from "framer-motion";
import { TodoItem } from "./TodoItem";
import { Todo } from "@/lib/todo";
import { ScrollArea } from "./ui/scroll-area";

interface TodoListProps {
  todos: Todo[];
  onTodoToggle: (id: string) => void;
  onTodoDelete: (id: string) => void;
}

export function TodoList({ todos, onTodoToggle, onTodoDelete }: TodoListProps) {
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <ScrollArea className="h-[60vh] pr-4">
      <AnimatePresence mode="popLayout">
        {activeTodos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-6"
          >
            <h2 className="mb-3 text-sm font-medium text-stone-500">Active</h2>
            {activeTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => onTodoToggle(todo.id)}
                onDelete={() => onTodoDelete(todo.id)}
              />
            ))}
          </motion.div>
        )}

        {completedTodos.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h2 className="mb-3 text-sm font-medium text-stone-500">Completed</h2>
            {completedTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={() => onTodoToggle(todo.id)}
                onDelete={() => onTodoDelete(todo.id)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </ScrollArea>
  );
}
