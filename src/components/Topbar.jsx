function Topbar({ setSidebarOpen, setSidebarCollapsed }) {
  return (
    <header className="topbar">
      <button
        className="menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>

      <button
        className="collapse-btn"
        onClick={() =>
          setSidebarCollapsed((prev) => !prev)
        }
      >
        ⇔
      </button>

      <h3>Finance Dashboard</h3>
    </header>
  );
}

export default Topbar;