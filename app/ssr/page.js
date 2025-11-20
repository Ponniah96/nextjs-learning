export const dynamic = "force-dynamic";

export default async function SSRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",   // fetch on every request
  });
  const posts = await res.json();

  return (
    <main>
      <h1>SSR Example</h1>

      <ul>
        {posts.slice(0, 5).map(p => (
          <li key={p.id}>{p.title}</li>
        ))}
      </ul>
    </main>
  );
}