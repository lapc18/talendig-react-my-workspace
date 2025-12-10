import type { FC } from "react";
import type { Status, ToDoEntity } from "../models/todos.model";
import { ToDoItem } from "./ToDoItem";

export interface ToDoListProps {
  todos: ToDoEntity[];
  onStatusChange: (id: string, status: Status) => void;
}

export const ToDoList: FC<ToDoListProps> = ({ todos, onStatusChange }) => {
  // you can show an empty message if the todos array is empty

  // const onStatusChange = (id: string, status: Status) => {
  //   //setTodos(todos.map(todo => todo.id === id ? { ...todo, status } : todo));

  //   console.log(id, status);
  // }

  return (
    <>
      <section id="todo-header">
        <h2 style={{ padding: 0, margin: 0 }}>Todo List</h2>
        <small style={{ padding: 0, margin: 0 }}>
          <span style={{ fontWeight: "bold" }}>Total todos:</span>{" "}
          {todos.length}
        </small>
      </section>
      <section id="todo-list-container">
        {todos.map((todo) => (
          <ToDoItem key={`TODO-ITEM-${todo.id}`} item={todo} onStatusChange={onStatusChange} />
        ))}
      </section>
    </>
  );
};
