import React from 'react';
import "../btnStyles.css";
import newArticleBtn from "../images/newAriticleBtn.png";
import sportsBtn from "../images/sportsBtn.png";
import musicBtn from "../images/musicBtn.png";
import gameBtn from "../images/gameBtn.png";
import healthBtn from "../images/healthBtn.png";
import studyBtn from "../images/studyBtn.png";

export default function Categories() {
    return (
        <div>
            <header>
                <button 
                    id="newArticleBtn"
                    style={{
                        position: "relative",
                        left: "500px",
                }}>
                + 게시물 작성하기
                </button>    
            </header>
            <body>
                <button 
                    id="sportsBtn"
                    style={{
                        position: "relative",
                        right: "300px",
                }}>
                SPORTS
                </button>

                <button 
                    id="musicBtn"
                    style={{
                        position: "relative",
                        right: "280px",
                }}>
                MUSIC
                </button>

                <button 
                    id="gameBtn"
                    style={{
                        position: "relative",
                        right: "260px",
                }}>
                GAME
                </button>
                
                <button 
                    id="healthBtn"
                    style={{
                        position: "relative",
                        right: "240px",
                }}>
                HEALTH
                </button>
                
                <button 
                    id="studyBtn"
                    style={{
                        position: "relative",
                        right: "220px",
                }}>
                STUDY
                </button>

            </body>
        </div>
    );
}
