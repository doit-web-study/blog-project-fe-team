import React from "react";
import "../styles/NavigationBar.css";

export function NavigationBar() {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <span className="university-info">
          아주대학교 중앙 IT 네트워킹 동아리
        </span>
      </div>
      <div className="nav-right">
        <a href="#my-account" className="nav-link">
          MY ACCOUNT
        </a>
        <a href="#my-page" className="nav-link">
          MY PAGE
        </a>
        <button className="sign-in-btn">SIGN IN</button>
        <button className="sign-up-btn">SIGN UP</button>
      </div>
    </nav>
  );
}
