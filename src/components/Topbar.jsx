function Topbar({ setSidebarOpen }) {
  return (
    <header className="topbar">
      <button
        className="menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        ☰
      </button>

      <h3>Finance Dashboard</h3>
    </header>
  );
}

export default Topbar;