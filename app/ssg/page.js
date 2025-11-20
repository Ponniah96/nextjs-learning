export const revalidate = 10;  // regenerate every 10 seconds

export default async function SSGPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    next: { revalidate: 10 },  // static caching
  });
  const todos = await res.json();

  return (
    <main>
      <h1>SSG Example</h1>

      <ul>
        {todos.slice(0, 5).map(t => (
          <li key={t.id}>
            {t.title} {t.completed ? "(Done)" : "(Pending)"}
          </li>
        ))}
      </ul>
    </main>
  );
}