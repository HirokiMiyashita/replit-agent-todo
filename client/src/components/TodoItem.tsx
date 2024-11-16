import { motion } from "framer-motion";
import { Todo } from "@/lib/todo";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { itemAnimation } from "@/lib/animations";

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <motion.div
      layout
      {...itemAnimation}
      className="group mb-2 flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
    >
      <Checkbox
        checked={todo.completed}
        onCheckedChange={onToggle}
        className="h-5 w-5 rounded-full border-2 border-stone-300"
      />
      
      <span
        className={`flex-1 text-stone-700 transition-colors ${
          todo.completed ? "text-stone-400 line-through" : ""
        }`}
      >
        {todo.text}
      </span>

      <Button
        variant="ghost"
        size="sm"
        className="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100"
        onClick={onDelete}
      >
        <X className="h-4 w-4 text-stone-400" />
      </Button>
    </motion.div>
  );
}
