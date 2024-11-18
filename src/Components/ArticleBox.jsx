import React from 'react';
import "../ArticleBoxStyle.css";
export default function ArticleBox()
{
    return(
        <div id='ArticleBox'>
            <div id='EmptyBox'>
            </div>
            <h4>NICKNAME</h4>
            <div>2024.XX.XX</div>
            <h1 id = "Title">
                Title
            </h1>
            <h3>
                contents
            </h3>
            <div>likes & comments</div>
        </div>        
    )
}