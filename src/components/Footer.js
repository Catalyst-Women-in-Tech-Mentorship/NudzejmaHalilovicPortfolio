import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} 
                    style={{color : "#fff", marginRight: "2rem" }}/>
                <div>
                    <p>Bosanski ljiljan 18</p>
                    <p>Sarajevo</p>
                </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} 
                style={{color : "#fff", marginRight: "2rem" }}/>
                +38762088985 </h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} 
                style={{color : "#fff", marginRight: "2rem" }}/>
                nudzejmahalilovic1@gmail.com </h4>
                </div>
            </div>
            <div className="right">
                <h4>About me</h4>
                <p>This is me Nudžejma Halilović.<br/>
                    Passionate about coding and creating elegant web solutions.
                    I turn ideas into functional and visually appealing websites.<br/>
                    Let's build something amazing together!</p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/nud%C5%BEejma-halilovi%C4%87-635108237/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={20} 
                        style={{color : "#fff", marginRight: "2rem"}}/> </a>
                         <a href="https://www.instagram.com/halilovicnudzejma/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} 
                        style={{color : "#fff", marginRight: "2rem"}}/></a>
                         <a href="https://www.linkedin.com/in/nud%C5%BEejma-halilovi%C4%87-635108237/" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={20} 
                        style={{color : "#fff", marginRight: "2rem"}}/></a>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer