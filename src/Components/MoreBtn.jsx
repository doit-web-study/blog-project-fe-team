import React from 'react';
import "../btnStyles.css";

export default function MoreButton(){
    return(
        <button
            id="MoreBtn"
                style={{
                    position: "relative",
                    left: "100px",
            }}>
            More
        </button>
    )
}