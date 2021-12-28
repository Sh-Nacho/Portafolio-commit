import React from 'react'
import "./About.css";
const About = () => {
    return (
        <div className="about-container">
            <div className="about-desc">
                <h3>Quien soy?</h3>
                <p>
                    Hola! Soy un programador Front-End de 15 años, completamente autodidacta. Llevo dos años dentro del mundo de la programacion y me gustaria ser Ingeniero civil electronico. Aparte de la programacion, me encanta hacer deportes como baloncesto, futbol y el skate.
                </p>
            </div>
            <div className="about-img">
                <img src="https://www.seekpng.com/png/full/323-3230183_file-icee-we-bare-bears-ice-bear-cute.png" alt="polar" className="about-img"/>
            </div>
        </div>
    )
}

export default About
