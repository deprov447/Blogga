import React from "react";

export default function header() {
  return (
    <nav className="nav-wrapper grey lighten-4">
      <div className="container">
        <a href="/" className="brand-logo center black-text">
          Blogga
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a className="black-text" href="https://google.com/">
              Login
            </a>
          </li>
          <li>
            <a className="black-text" href="https://google.com/">
              Sign Up
            </a>
          </li>
          <li>
            <a className="black-text" href="https://google.com/">
              Log Out
            </a>
          </li>
          <li>
            <a className="black-text" href="https://google.com/">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
