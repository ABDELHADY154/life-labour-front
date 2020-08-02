import React from "react";
import LOGO from "../../assets/logo2.png";

// @Todo: footer responsive mobile view
export default function Footer() {
  return (
    <nav class="navbar navbar-dark bg-dark footer">
      <a class="navbar-brand ml-4" href="#">
        <img src={LOGO} width="100" height="25" alt="" loading="lazy" />
      </a>
      <ul className="nav justify-content-center text-center mr-auto navUl">
        <li
          className={
            window.location.pathname === "/"
              ? "nav-item mr-3 navLinkItemFooter active"
              : "nav-item mr-3 navLinkItemFooter"
          }
        >
          <a href="/" className="nav-link navLinkItemFooter">
            Home
          </a>
        </li>
        <li
          className={
            window.location.pathname === "/about"
              ? "nav-item mr-3 navLinkItemFooter active"
              : "nav-item mr-3 navLinkItemFooter"
          }
        >
          <a href="/about" className="nav-link navLinkItemFooter">
            About
          </a>
        </li>
        <li
          className={
            window.location.pathname === "/jobs"
              ? "nav-item mr-3 navLinkItemFooter active"
              : "nav-item mr-3 navLinkItemFooter"
          }
        >
          <a href="/jobs" className="nav-link navLinkItemFooter">
            Jobs
          </a>
        </li>
        <li
          className={
            window.location.pathname === "/blog"
              ? "nav-item mr-3 navLinkItemFooter active"
              : "nav-item mr-3 navLinkItemFooter"
          }
        >
          <a href="/blog" className="nav-link navLinkItemFooter">
            Blog
          </a>
        </li>
        <li
          className={
            window.location.pathname === "/pricing"
              ? "nav-item mr-3 navLinkItemFooter active"
              : "nav-item mr-3 navLinkItemFooter"
          }
        >
          <a href="/pricing" className="nav-link navLinkItemFooter">
            Pricing
          </a>
        </li>
      </ul>
    </nav>

    //   //{" "}
    // </div>
  );
}
