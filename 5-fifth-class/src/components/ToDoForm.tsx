import { useState, type FC } from "react";
import type { ToDoEntity } from "../models/todos.model";

export interface ToDoFormProps {
  onSave?: (item: ToDoEntity) => void;
}
export const ToDoForm: FC<ToDoFormProps> = ({ onSave }) => {
  const [text, setText] = useState("");
  // const [status, setStatus] = useState<Status>('created');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave?.({
      id: crypto.randomUUID(),
      createdAt: new Date(),
      text: text,
      status: "created",
    });

    //Reset the form
    setText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        placeholder="Add a new todo ++"
        onChange={(e) => setText(e.target.value)}
        required
        minLength={3}
      />

      <button type="submit">Create</button>
    </form>
  );
};
