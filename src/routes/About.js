import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CodeImg from "../components/CodeImg";
import AboutContent from "../components/AboutContent";
const About = () => {
  return <div>
    <Navbar/>
    <CodeImg heading="ABOUT." text="I am Front-End Developer."/>
    <AboutContent/>
    <Footer/> 
  </div>;
};

export default About;