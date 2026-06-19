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

      {/* Links */}
      <NavLink to="/" className={linkClass} onClick={handleLinkClick}>
        <span>🏠</span>
        {!collapsed && <span>Dashboard</span>}
      </NavLink>

      <NavLink to="/transactions" className={linkClass} onClick={handleLinkClick}>
        <span>💰</span>
        {!collapsed && <span>Transactions</span>}
      </NavLink>

      <NavLink to="/budgets" className={linkClass} onClick={handleLinkClick}>
        <span>📊</span>
        {!collapsed && <span>Budgets</span>}
      </NavLink>

      <NavLink to="/reports" className={linkClass} onClick={handleLinkClick}>
        <span>📈</span>
        {!collapsed && <span>Reports</span>}
      </NavLink>

      <NavLink to="/settings" className={linkClass} onClick={handleLinkClick}>
        <span>⚙</span>
        {!collapsed && <span>Settings</span>}
      </NavLink>
    </div>
  );
}

export default Sidebar;