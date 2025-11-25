import { FC, useState } from "react";
import { TodoItem } from "../../models/todo-item";

export interface ToDoFormProps {
  onSave?: (item: TodoItem) => void;
}

export const ToDoForm: FC<ToDoFormProps> = ({ onSave }) => {
  const [text, setTodoText] = useState("");

  const onInputChange = (text: string) => {
    setTodoText(text);
  };

  return (
    <section id="todo-form">
      <input
        type="text"
        id="text"
        value={text}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button onClick={() => onSave?.({ text, status: 'in-progress' })} disabled={text.length < 3}>
        Enviar
      </button>
    </section>
  );
};

export default ToDoForm;
