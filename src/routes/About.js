import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CodeImg from "../components/CodeImg";
const About = () => {
  return <div>
    <Navbar/>
    <CodeImg heading="ABOUT." text="I am Front-End Developer."/>
    <Footer/> 
  </div>;
};

export default About;