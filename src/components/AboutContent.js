import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import rctimg from "../assets/rctimg.jpg"
import javascriptimg from "../assets/javascriptimg.jpg"
import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Passionate Frontend React Developer skilled in crafting visually appealing and responsive interfaces. Proficient in React.js, JavaScript, HTML, and CSS. Committed to staying current with industry trends, I deliver high-quality, user-centric solutions for an elevated digital experience.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={javascriptimg}
                    className="img"
                    alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={rctimg}
                    className="img"
                    alt="true"/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default AboutContent