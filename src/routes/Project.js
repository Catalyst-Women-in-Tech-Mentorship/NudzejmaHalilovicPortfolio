import React from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CodeImg from "../components/CodeImg";

const Project = () => {
  return <div>
    <Navbar/>
    <CodeImg heading="PROJECTS." text="Some of my works"/>
    <Footer/>
  </div>;
};

export default Project;