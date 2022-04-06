import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light sticky">
          <div className="container">
            <Logo />
            <divt className="me-auto">
              <h4>
                Learning <span className="text-primary">React</span>
              </h4>
            </divt>
            <div>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active text-bold" href="#">
                    React Course - Project 2
                    <span className="text-primary">: Counter</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
