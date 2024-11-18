import React from "react";
import { MainLogo } from "./MainLogo";
import { NavigationBar } from "./NavigationBar";

import "../styles/Header.css";

export function Header() {
  return (
    <header className="header">
      <NavigationBar /> {/* 상단 고정된 네비게이션 바 */}
      <MainLogo /> {/* 일반적인 위치의 메인 로고 */}
    </header>
  );
}
