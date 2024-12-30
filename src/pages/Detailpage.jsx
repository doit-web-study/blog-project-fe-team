import React from "react";
import "../styles/Detailpage.css";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Detailpage(props) {
  return (
    <div className="product-detail-page">
      {/* 헤더 영역 */}
      <header className="header-container">
        <div className="header-left">
          <span className="site-title">아주대학교 중앙 IT 네트워킹 동아리</span>
        </div>
        <div className="header-right">
          <span>MY ACCOUNT</span>
          <span>MY PAGE</span>
          <button>SIGN IN</button>
          <button className="sign-up">SIGN UP</button>
        </div>
      </header>

      {/* 메인 컨텐츠 래퍼 */}
      <main className="main-wrapper">
        {/* 페이지 타이틀 */}
        <h1 className="post-title">아 집가고 싶다.</h1>

        {/* 작성자 정보 + 구분선 */}
        <div className="post-info">
          <div className="writer-and-date">
            <span className="writer">SANGGUN</span>
            <span className="date">2024. 11. 6. 09:00</span>
          </div>
          <hr className="line-divider" />
        </div>

        {/* 카테고리 / 이미지 / 본문 */}
        <section className="post-body">
          <div className="category-wrapper">
            <div className="category-pill">SPORTS</div>
            <div className="category-pill">HEALTH</div>
          </div>

          {/* 대표 이미지 */}
          <div className="post-image"></div>

          {/* 게시글 본문 */}
          <p className="post-content">
            진짜 집인데 집가고 싶다.
            <br />
            ㅇㅇㅇㅇㅇㅇㅇ ㅇㅇㅇ ㅇ ㅇㅇ ㅇ ㅇ ㅇ ㅇ
            ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
          </p>
        </section>

        {/* 좋아요/댓글 영역 */}
        <section className="feedback-section">
          <div className="feedback-buttons">
            <div className="feedback-pill">
              <span className="icon-heart"></span>
              <span>좋아요</span>
              <span>36</span>
            </div>
            <div className="feedback-pill">
              <span className="icon-heart-fill"></span>
              <span>좋아요</span>
              <span>37</span>
            </div>
            <div className="feedback-pill">
              <span className="icon-comment"></span>
              <span>댓글</span>
              <span>3</span>
            </div>
          </div>

          {/* 실제 댓글 목록 박스 (회색 배경) */}
          <div className="comment-container">
            <div className="comment-list">
              {/* 댓글 1 */}
              <div className="comment-item">
                <strong>석찬</strong>
                <div className="comment-text">
                  그래도 순간이동이 맞음. 너 산학원 안가봤지?
                </div>
              </div>
              {/* 댓글 2 */}
              <div className="comment-item">
                <strong>명건</strong>
                <div className="comment-text">
                  ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                </div>
              </div>
              {/* 댓글 3 */}
              <div className="comment-item">
                <strong>지나가는 두잇 부원</strong>
                <div className="comment-text">
                  ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ
                </div>
              </div>

              {/* 페이지네이션 부분 */}
              <div className="pagination-pill">1</div>
            </div>

            {/* 댓글 입력 영역 */}
            <div className="comment-input-box">
              <div className="comment-input-wrapper">
                <strong>나 두잇 임원진인데..</strong>
                <p className="comment-description">
                  두잇 블로그가 따뜻해지는 댓글을 달아주시길 부탁드립니다.
                </p>
                <p className="comment-length">0/3000</p>
                <button className="comment-submit-button">등록하기</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 푸터 영역 */}
      <footer className="footer-container">
        <div className="footer-inner">
          {/* 상단 영역 */}
          <div className="footer-top">
            {/* 로고: 예시로 텍스트만 */}
            <div className="footer-logo">Do-iT</div>
            <p className="footer-info">
              동아리명 : Do-iT | 대표자 : 윤석찬 <br />
              #웹/앱_스터디 #IT컨퍼런스 #코딩 #개발 #IT네트워킹 <br />
              주소 : 경기도 수원시 영통구 월드컵로 206 구학생회관 234호
            </p>
          </div>

          {/* 하단 아이콘 + 카피라이트 */}
          <div className="footer-bottom">
            <div className="footer-icons">
              <div className="icon-button">IG</div>
              <div className="icon-button">GH</div>
              <div className="icon-button">YT</div>
              <div className="icon-button">IN</div>
            </div>
            <span className="copyright">© 2024. DoiT. All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
