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
          <a className="navbar-brand ml-4" href="/">
            <img src={LOGO} width="100" height="25" alt="" loading="lazy" />
          </a>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ml-5">
            <li
              className={
                window.location.pathname === "/"
                  ? "nav-item mr-3 navLinkItem active"
                  : "nav-item mr-3 navLinkItem"
              }
            >
              <a href="/" className="nav-link navLinkItem">
                {/* <Link to="/" className="nav-link"> */}
                Home
                {/* </Link> */}
              </a>
            </li>
            <li
              className={
                window.location.pathname === "/about"
                  ? "nav-item mr-3 navLinkItem active"
                  : "nav-item mr-3 navLinkItem"
              }
            >
              <a href="/about" className="nav-link NAVLINK">
                {/* <Link to="/about" className="nav-link"> */}
                About
                {/* </Link> */}
              </a>
            </li>
            <li className="nav-item mr-3 navLinkItem">
              <Link to="/jobs" className="nav-link navLinkItem">
                Jobs
              </Link>
            </li>
            <li className="nav-item mr-3 navLinkItem">
              <Link to="/blog" className="nav-link navLinkItem">
                Blog
              </Link>
            </li>
            <li className="nav-item mr-3 navLinkItem">
              <Link to="/pricing" className="nav-link navLinkItem">
                Pricing
              </Link>
            </li>
          </ul>
          <div className="my-2_my-lg-0">
            {/* <li className=" navLinkItem"> */}
            <a href="/login" className="mr-3 loginNavLink">
              Sign in
            </a>

            <a href="/" className="btn btn-warning rounded-0 getStartedButton">
              Get Started
            </a>
          </div>
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
