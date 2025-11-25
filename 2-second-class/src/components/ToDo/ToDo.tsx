import type { FC } from "react";
import type { TodoItem } from "../../models/todo-item";
import styles from './ToDo.module.css';


export interface ToDoProps {
    item: TodoItem;
    onStatusChange?: (item: TodoItem) => void;
}

export const ToDo:FC<ToDoProps> = ({ item, onStatusChange }) => {

    const { text, status } = item;

    return <section 
        className={`${styles.todo_item_container} ${styles.todo_item__status} ${styles[status]}`}
    >
        <h3 className={styles['todo-item--text']}>{text}</h3> 
        <input
            hidden={status === 'deleted'}
            type="checkbox" 
            className={styles.todo_item_checkbox}
            checked={status === 'done'}
            onChange={(e) => onStatusChange?.({...item, status: e.target.checked ? 'done' : 'in-progress'})} 
        />
    </section>;
}

export default ToDo;