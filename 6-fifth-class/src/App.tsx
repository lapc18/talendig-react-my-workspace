import { FC, useEffect, useState } from "react";
import "./App.css";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

export const App: FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const callAsyncApi = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    }
    callAsyncApi();
  }, [setUsers]);
  return (
    <>
      <h1>Users App</h1>
      <hr />

      <section id="users-list-container">
        {users.map((item, i) => (
          <article id="user-item" key={`my-user-${i * 2}`}>
            <h3 id="user-name">{item.username}</h3>
            <h5 id="data-item">Email:{ item.email }</h5>
            <h5 id="data-item">Phone:{ item.phone }</h5>
            <h5 id="data-item">Website:{ item.website }</h5>
            <h5 id="data-item">Company Name:{ item.company.name }</h5>
            <h5 id="data-item">Address: { item.address.street } { item.address.suite } { item.address.city } { item.address.zipcode }</h5>
          </article>
        ))}
      </section>
    </>
  );
};

export default App;
