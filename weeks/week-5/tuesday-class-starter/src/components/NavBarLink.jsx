import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarLink = () => {
  const links = [
    { to: "/", text: "Home Page - Using Link Comp" },
    { to: "/about", text: "About Page" },
    { to: "/my-info", text: "My Info Page" },
  ];

  return (
    <div className="card-menu">
      <nav>
        <ul className="app-ul">
          {links.map(({ to, text }) => (
            <li key={to} className="app-li">
              <NavLink
                to={to}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
