import React from "react";
import "../styles/Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">Do-iT</h2>
        <div className="footer-info">
          <p>동아리명: Do-iT | 대표자: 윤석찬</p>
          <p>#웹/앱_스터디 #IT견문확수 #코딩 #개발 #IT네트워킹</p>
          <p>주소: 경기도 수원시 영통구 월드컵로 206 구학생회관 234호</p>
        </div>
        <hr className="footer-divider" />
        <div className="footer-icons">
          <a href="#instagram" className="icon-circle">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#github" className="icon-circle">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="#youtube" className="icon-circle">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#linkedin" className="icon-circle">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <p className="footer-copyright">© 2024. Do-iT. All Rights Reserved</p>
      </div>
    </footer>
  );
}
