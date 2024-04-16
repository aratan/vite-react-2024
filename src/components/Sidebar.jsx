// components/Sidebar.jsx
import React from 'react';

export function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <a to="/">Home</a>
          </li>
          <li>
            <a to="/investor">Investor</a>
          </li>
          <li>
            <a to="/manager">Manager</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
