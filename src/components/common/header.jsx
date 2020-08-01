import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../home/home";
import About from "../about/about";
import LOGO from "../../assets/logo.png";

export default function Header() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light HEADER">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand ml-4" href="/">
            <img src={LOGO} width="100" height="30" alt="" loading="lazy" />
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-5">
            <li
              className={
                window.location.pathname === "/"
                  ? "nav-item mr-3 active"
                  : "nav-item mr-3"
              }
            >
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={
                window.location.pathname === "/about"
                  ? "nav-item mr-3  active"
                  : "nav-item mr-3 "
              }
            >
              <Link to="/about" className="nav-link">
                About
              </Link>
              {/* {Route.isActive("myRoute", {param1: "te"}) ? 'active' : ''} */}
            </li>
            <li className="nav-item mr-3">
              <Link to="/jobs" className="nav-link"></Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item mr-3">
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
