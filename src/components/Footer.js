import { FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaWhatsapp } from "react-icons/fa"
import "./FooterStyles.css"

import React from 'react'

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
                        <FaLinkedin size={20} 
                        style={{color : "#fff", marginRight: "2rem"}}/>
                        <FaInstagram size={20} 
                        style={{color : "#fff", marginRight: "2rem"}}/>
                        <FaWhatsapp size={20} 
                        style={{color : "#fff", marginRight: "2rem"}}/>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Footer