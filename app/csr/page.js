"use client";

import { useEffect, useState } from "react";

export default function CSRPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <main>
      <h1>CSR Example</h1>

      {users.length === 0 ? <p>Loading...</p> : (
        <ul>
          {users.map(u => <li key={u.id}>{u.name}</li>)}
        </ul>
      )}
    </main>
  );
}