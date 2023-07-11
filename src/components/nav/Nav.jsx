import React from "react";
import "./nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {GiSkills} from "react-icons/gi"
//import {RiServiceLine} from "react-icons/ri"
import {MdOutlineEmojiEvents} from "react-icons/md";
import {AiOutlineMessage} from "react-icons/ai"
import {GiRobotGrab} from "react-icons/gi";

function Nav(){
    const [activeNav,setactiveNav]=React.useState("#");
    
    return(
        <nav>
            <a onClick={()=>setactiveNav("#")} href="#" className={activeNav==="#" ? "active" : ""}><AiOutlineHome/></a>
            <a onClick={()=>setactiveNav("#about")} href="#about" className={activeNav==="#about" ? "active" : ""}><AiOutlineUser/></a>
            <a onClick={()=>setactiveNav("#experience")} href="#experience" className={activeNav==="#experience" ? "active" : ""}><GiRobotGrab/></a>
            <a onClick={()=>setactiveNav("#portfolio")} href="#portfolio" className={activeNav==="#portfolio" ? "active" : ""}><MdOutlineEmojiEvents/></a>
             <a onClick={()=>setactiveNav("#testimonials")} href="#testimonials" className={activeNav==="#testimonials" ? "active" : ""}><GiSkills/></a>
            <a onClick={()=>setactiveNav("#contact")} href="#contact" className={activeNav==="#contact" ? "active" : ""}><AiOutlineMessage/></a>
        </nav>
    )
}



export default Nav;