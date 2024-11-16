import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { createTodo, Todo } from "@/lib/todo";
import { useToast } from "@/hooks/use-toast";

interface CreateTodoProps {
  onTodoCreated: (todo: Todo) => void;
}

export function CreateTodo({ onTodoCreated }: CreateTodoProps) {
  const [text, setText] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      toast({
        title: "Error",
        description: "Task text cannot be empty",
        variant: "destructive",
      });
      return;
    }

    const newTodo = createTodo(text);
    onTodoCreated(newTodo);
    setText("");
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex gap-2"
      onSubmit={handleSubmit}
    >
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="h-10 rounded-lg border-stone-200 bg-white shadow-sm placeholder:text-stone-400 focus-visible:ring-stone-200"
      />
      <Button
        type="submit"
        className="h-10 w-10 rounded-lg bg-stone-800 p-0 hover:bg-stone-700"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </motion.form>
  );
}
