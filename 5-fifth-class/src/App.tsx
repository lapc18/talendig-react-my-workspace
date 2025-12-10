import { useEffect, useState, type FC } from "react";
import "./App.css";
import type { Status, ToDoEntity } from "./models/todos.model";
import { ToDoForm } from "./components/ToDoForm";
import { ToDoList } from "./components/ToDoList";

const App: FC = () => {
  const [todos, setTodos] = useState<ToDoEntity[]>([]);

  const onSave = (item: ToDoEntity) => {
    setTodos([...todos, item]); // => [[], {}] => [{}, {}, {}]
    // setTodos(prev => [...prev, item]);
  };

  const onStatusChange = (id: string, status: Status) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, status } : todo))
    );
    console.log(todos);
  };
  // Hacer Fetch del API de USERS y renderizar los users en una lista de items en el UI
  // API: https://jsonplaceholder.typicode.com/users
  // {id: string, name: string, email: string, phone: string, website: string}
  // BE HAPPY

  // useEffect
  useEffect(() => {

    const apiCall = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      // { id: string, title: stirng, userId: string, completed: boolean }
      //  {userId: 1, id: 1, title: 'delectus aut autem', completed: false}

      if(response.ok && Array.isArray(data) && data.length > 0) {
        const todosFromApi: Array<ToDoEntity> = data.map(x => ({
          id: x.id,
          createdAt: new Date(),
          text: x.title,
          status: x.completed ? 'done' : 'created',
        }));

        setTodos(todosFromApi);
      }
    }
  
    apiCall();
  }, [setTodos] // array of dependencies, when the array is empty, the useEffect will run only once
);

  return (
    <main>
      <h1 style={{ textAlign: "center", fontSize: "26px" }}>
        The Real TODO Shady App
      </h1>
      <hr />
      <ToDoForm onSave={onSave} />
      <hr />
      <ToDoList todos={todos} onStatusChange={onStatusChange} />
    </main>
  );
};

export default App;
