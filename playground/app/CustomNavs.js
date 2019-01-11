import React from "react";
import { GENERIC_NAV } from "../../src/utils";

function Navs({ navs: { links }, onNavChange }) {
  let relLinks = links.filter(({ nav }) => nav !== GENERIC_NAV);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            {relLinks.map(({ nav, name, icon, isActive }, i) => (
              <li key={i} onClick={() => onNavChange(nav)} className="nav-item">
                <a
                  className={isActive ? "active nav-link" : "nav-link"}
                  href="#">
                  {icon && <span className={icon} aria-hidden="true" />}
                  &nbsp;{name || nav}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navs;
