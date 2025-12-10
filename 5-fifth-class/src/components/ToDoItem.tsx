import type { FC } from "react";
import type { Status, ToDoEntity } from "../models/todos.model";

export interface ToDoItemProps {
  item: ToDoEntity;
  onStatusChange: (id: string, status: Status) => void;
}

export const ToDoItem: FC<ToDoItemProps> = ({ item, onStatusChange }) => {

  const getStatusColor = (status: Status) => {
    switch (status) {
      case 'deleted':
        return '1px solid red';
      case 'in-progress':
        return '1px solid blue';
      case 'done':
        return '1px solid green';
      case 'created':
        return '1px solid yellow';
    }
  }


  return (
    <section style={{ 
      border: getStatusColor(item.status), 
      padding: 10, 
      margin: 10,
    }}
    >
      <h3
        style={{ fontSize: "18px", fontWeight: "bold", margin: 0, padding: 0 }}
      >
        {item.text}
      </h3>
      <button disabled={item.status === 'deleted'} onClick={() => onStatusChange(item.id! as string, 'deleted')}>Delete</button>
      <button disabled={item.status === 'in-progress'} onClick={() => onStatusChange(item.id! as string, 'in-progress')}>In Progress</button>
      <button disabled={item.status === 'done'} onClick={() => onStatusChange(item.id! as string, 'done')}>Done</button>
      <button disabled={item.status === 'created'} onClick={() => onStatusChange(item.id! as string, 'created')}>Created</button>
    </section>
  );
};
