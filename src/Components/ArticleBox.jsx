import React from 'react';
import "../ArticleBoxStyle.css";
export default function ArticleBox()
{
    return(
        <div 
            id='ArticleBox'
            style={{
                display: "flex",
                // flexDirection: "row", // 가로 정렬
                alignItems: "flex-start", // 세로 방향 정렬
                padding: "16px",
                gap: "16px", // `EmptyBox`와 콘텐츠 사이 간격
                boxSizing: "border-box",
                margin: "10px", // ghhugvbnjhuygbjhugjbhbn 
            }}>
            <div 
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    padding: "16px",
                    gap: "24px",
                }}
            >
            <div id='EmptyBox'></div>
            <div
                style={{
                    margin: 0,
                }}>
                <div id='NICKNAME'>NICKNAME</div>
                <div id='DATE'>2024.XX.XX</div>
                <div id = "TITLE">Title</div>
                <div id = "CONTENTS">Contents</div>
                <div id = "LIKES_COMMENT">likes & comments</div>
            </div>
        </div> 
        </div>
    )
}