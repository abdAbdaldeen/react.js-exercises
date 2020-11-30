import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="webName">Todoey</div>
      <nav>
        <ul>
          <Link to="/">
            <li>
              <i className="fas fa-home"></i>
            </li>
          </Link>
          <Link to="/todo">
            <li>
              <i class="fas fa-clipboard-list"></i>
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
