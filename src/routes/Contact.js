import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CodeImg from "../components/CodeImg";
import  Form  from "../components/Form";
const Contact = () => {
  return <div>
    <Navbar/>
    <CodeImg heading="CONTACT." text="Lets have a chat"/>
    <Form></Form>
    <Footer/>
  </div>;
};

export default Contact;