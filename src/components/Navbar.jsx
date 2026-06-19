import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h2>Finance Dashboard</h2>

      {/* Hamburger button */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Nav links */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>Dashboard</NavLink>
        <NavLink to="/transactions" onClick={closeMenu}>Transactions</NavLink>
        <NavLink to="/budgets" onClick={closeMenu}>Budgets</NavLink>
        <NavLink to="/reports" onClick={closeMenu}>Reports</NavLink>
        <NavLink to="/settings" onClick={closeMenu}>Settings</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;