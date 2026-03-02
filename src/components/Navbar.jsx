import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">StockDash</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Market</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;