import React from 'react'
import "./Slider.css" 
const Slider = () => {
    return (
        <div className="slider-desc">
            <h3>
                Habilidades
            </h3>
            <p>
                He aqui las tegnologias las cuales manejo a la hora de un proyecto:
            </p>
            <div className="row">
                <div className="all-in">
                    <img src="https://image.flaticon.com/icons/png/512/908/908337.png" alt="Arduino-Card" className="img-desc"/>
                    <h6>Arduino</h6>
                </div>
                
                <div className="all-in">
                    <img src="https://image.flaticon.com/icons/png/512/38/38497.png" alt="html5" className="img-desc"/>
                    <h6>Html</h6>
                </div>
                
                <div className="all-in">
                    <img src="https://image.flaticon.com/icons/png/512/82/82127.png" alt="css3" className="img-desc"/>
                    <h6>Css</h6>
                </div>
                
                <div className="all-in">
                    <img src="https://image.flaticon.com/icons/png/512/460/460771.png" alt="javascript" className="img-desc"/>
                 <h6>JavaScript</h6>
                </div>
                
                <div className="all-in">
                    <img src="https://image.flaticon.com/icons/png/512/50/50024.png" alt="react js" className="img-desc"/>
                    <h6>React Js</h6> 
                </div>
                
                <div className="all-in">
                    <img src="https://image.flaticon.com/icons/png/512/1348/1348026.png" alt="bootstrap 4" className="img-desc"/>
                    <h6>Bootstrap</h6>
                </div>
                
                <div className="all-in">
                    <img src="https://image.flaticon.com/icons/png/512/460/460754.png" alt="sass" className="img-desc"/>
                    <h6>Sass</h6>
                </div>

                <div className="all-in">
                    <img src="https://image.flaticon.com/icons/png/512/52/52234.png" alt="git-version control" className="img-desc"/>
                    <h6>Git</h6>
                </div>
                
            </div>
        </div>
    )
}

export default Slider
