import React from "react";
import { ReactDOM } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav"
import Testimonials from "./components/testimonials/Testimonials";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";

function App(){
  return (<div>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        {/* <Services/> */}
        <Portfolio/>
        <Testimonials/>
        <Contacts/>
       <Footer/> 
  </div>
  )
}

export default App;