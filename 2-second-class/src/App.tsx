import { useState } from "react";
import "./App.css";
import ToDo from "./components/ToDo";
import type { Status, TodoItem } from "./models/todo-item";
import ToDoForm from "./components/ToDoForm";

/*
Ejercicio del día: crear un TODO APP
---------
Formulario sencillo
useState Hooks
listas
componentes
entre otros gustos y sabores...


Términos importantes:
- DRY => Dont Repeat Yourself
- Presentation Components


*/

const TODO_ITEMS: Array<TodoItem> = [
  { id: 0, text: "Lo que yo quiera", status: "done" },
  { id: 1, text: "Lo que yo quiera 1", status: "in-progress" },
  { id: 2, text: "Lo que yo quiera 2", status: "deleted" },
];

function App() {
  // lista de todos
  const [todos, setTodos] = useState<TodoItem[]>([...TODO_ITEMS]);

  const onSendClicked = (item: TodoItem) => {
    setTodos([...todos, { ...item, id: todos.length + 1 }]);
  };

  const onToDoStatusChange = (item: TodoItem) => {
    setTodos((t) => {
      const newList = t.map(x => x.id === item.id ? item : x)

      return newList;
    })
  }

  const filters:Status[] = ['in-progress', 'done'];

  return (
    <main className="container">
      <h1>TODO App</h1>
      
      <ToDoForm onSave={onSendClicked} />

      {/* lista de items */}
      <section className="todo-container">
        {todos.filter(x =>filters.includes(x.status)).map((todo) => (
          <ToDo item={todo} key={`TODO-ITEM-${todo.id}`} onStatusChange={onToDoStatusChange} />
        ))}
      </section>
    </main>
  );
}

export default App;
