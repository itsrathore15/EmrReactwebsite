import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";
import {BsInstagram} from "react-icons/bs";
function HeaderSocials(){
     return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/company/emrclub/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/EmrNITK" target="_blank"><FaGithub/></a>
            <a href="https://www.instagram.com/emr_nitkkr/" target="_blank"><BsInstagram/></a>
        </div>
     )
}



export default HeaderSocials;