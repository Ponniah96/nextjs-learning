export default function DashboardLayout({ children }) {
  return (
    <div style={{ border: "2px solid #000", padding: "20px" }}>
      <h2>Dashboard Layout</h2>

      <nav style={{ marginBottom: "20px" }}>
        <a href="/dashboard" style={{ marginRight: 10 }}>Overview</a>
        <a href="/dashboard/profile" style={{ marginRight: 10 }}>Profile</a>
        <a href="/dashboard/settings">Settings</a>
      </nav>

      {children}
    </div>
  );
}