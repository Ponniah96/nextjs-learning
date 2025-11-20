"use client";

import { useEffect, useState } from "react";

export default function ApiTestPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  return (
    <main>
      <h1>API Route Test</h1>

      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </main>
  );
}