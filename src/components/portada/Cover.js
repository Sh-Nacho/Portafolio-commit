import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";


const Cover = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>Una pagina creada con amor</h1>
            <p>Programador Web autodidacta</p>
        </div>
        
    )
};
export default Cover;

