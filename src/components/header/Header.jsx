import React from "react";
import "./header.css"
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
const sunil =require('../../asset/Sunil-img.png');
const emrlogo =require('../../asset/emrlogo.png');

function Header(){
    return (
        <header>
            <div className=".container header_container">
              {/* <h5>Hello </h5> */}
              <h1>Embedded Systems and Robotics</h1>
              <h5 className="text-light">An earnest endeavour in the robotics and automata domain</h5>
              <CTA/>
              <HeaderSocials/>
              <div className="me">
                 <img className="myimg" src={emrlogo} alt="me"></img>
              </div>   
              <a href="#contact" className="scroll_down">Scroll Down</a>
            </div>
        </header>
    )

}



export default Header;