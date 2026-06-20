import { NavLink } from "react-router-dom";

function Sidebar({ open, setOpen, collapsed, setCollapsed }) {
  const handleLinkClick = () => {
    setOpen(false);
  };

  const toggleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  const linkClass = ({ isActive }) =>
    `sidebar-link ${isActive ? "active" : ""}`;

  return (
    <div
      className={`sidebar ${open ? "open" : ""} ${
        collapsed ? "collapsed" : ""
      }`}
    >
      {/* Header */}
      <div className="sidebar-header">
        <div className="logo-wrapper">
          <h2 className="logo">
            {collapsed ? "💰" : "Finance"}
          </h2>

          {/* Collapse button */}
          <button
            className="collapse-btn"
            onClick={toggleCollapse}
          >
            {collapsed ? "→" : "←"}
          </button>
        </div>
      </div>

      {/* Links */}
      <nav>
        <NavLink to="/" className={linkClass} onClick={handleLinkClick}>
          <span>🏠</span>
          <span className="sidebar-link-text">Dashboard</span>
        </NavLink>

        <NavLink to="/transactions" className={linkClass} onClick={handleLinkClick}>
          <span>💰</span>
          <span className="sidebar-link-text">Transactions</span>
        </NavLink>

        <NavLink to="/budgets" className={linkClass} onClick={handleLinkClick}>
          <span>📊</span>
          <span className="sidebar-link-text">Budgets</span>
        </NavLink>

        <NavLink to="/reports" className={linkClass} onClick={handleLinkClick}>
          <span>📈</span>
          <span className="sidebar-link-text">Reports</span>
        </NavLink>

        <NavLink to="/settings" className={linkClass} onClick={handleLinkClick}>
          <span>⚙</span>
          <span className="sidebar-link-text">Settings</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;