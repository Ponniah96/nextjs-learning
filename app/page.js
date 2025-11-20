
export default function Home() {
  return (
    <div className="">
      <h1>Welcome to Next.js Learning App!!!</h1>

      <h2>Core Concepts</h2>

<h3>Next.js Introduction</h3>

<h4>Introduction</h4>
<p>
Next.js is a React framework for building fast, SEO-friendly web apps with server-side,
static, and full-stack capabilities. It simplifies routing, data fetching, and performance optimization.
</p>

<hr></hr>

<h3>Basic Concepts</h3>

<h4>Pages Router</h4>
<p>
The traditional routing system using the <code>/pages</code> directory. It supports SSR, SSG, CSR, and API routes with simple file-based navigation.
</p>

<h4>Static Site Generation (SSG)</h4>
<p>
Pre-renders pages at build time for fast loading and improved SEO. Great for static or rarely changing content.
</p>

<h4>Server-Side Rendering (SSR)</h4>
<p>
Renders pages per request, enabling dynamic, personalized, and frequently updated content.
</p>

<h4>CSS Modules</h4>
<p>
Provides locally scoped CSS for components, preventing global style conflicts and improving maintainability.
</p>

<h4>Public Folder</h4>
<p>
Stores static assets like images and files that can be accessed directly through URL paths.
</p>

  <hr></hr>

<h3>Intermediate Concepts</h3>

<h4>App Router</h4>
<p>
A modern routing system using the <code>/app</code> directory with layouts, streaming, and server components.
</p>

<h4>Layouts & Nested Layouts</h4>
<p>
Lets you create shared UI wrappers for pages and nested routes, reducing code duplication.
</p>

<h4>API Routes</h4>
<p>
Allows building backend endpoints directly inside Next.js without a separate server.
</p>

<h4>Next/Image Optimization</h4>
<p>
Automatically optimizes images for size, format, and responsiveness, improving page performance.
</p>

<h4>Dynamic Routing</h4>
<p>
Creates routes based on URL parameters using bracket syntax like <code>[id]</code> for flexible navigation.
</p>

<hr></hr>

<h3>Advanced Concepts</h3>

<h4>React Server Components (RSC)</h4>
<p>
Render components on the server by default, reducing client bundle size and improving performance.
</p>

<h4>Incremental Static Regeneration (ISR)</h4>
<p>
Regenerates static pages in the background at set intervals, combining static speed with dynamic updates.
</p>

<h4>Server Actions</h4>
<p>
Allows running server-side logic directly from components without using API routes or client-side calls.
</p>

<h4>Middleware</h4>
<p>
Executes code before requests are processed, useful for auth, redirects, and filtering traffic.
</p>

<h4>Edge Functions</h4>
<p>
Ultra-fast serverless functions running close to users globally, reducing latency for critical logic.
</p>
    </div>
  );
}
