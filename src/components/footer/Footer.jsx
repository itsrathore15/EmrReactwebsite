import React from "react";
import "./footer.css"

import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";


function Footer(){
    return(
        <footer>
            <a href="" className="footer_logo">EMR</a>
            <ul className="permalinks">
                <li><a href="">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Technical Fields</a></li>
                <li><a href="#portfolio">Events</a></li>
                <li><a href="#testimonials">Team</a></li>
                {/* <li><a href="">Home</a></li> */}
            </ul>

            <div className="footer_social">
                <a href="https://www.instagram.com/emr_nitkkr/"><BsInstagram></BsInstagram></a>
                <a href="https://www.linkedin.com/company/emrclub/"><BsLinkedin></BsLinkedin></a>
                <a href="https://github.com/EmrNITK"><FaGithub></FaGithub></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; EmR. All rights reserved.</small>
            </div>
        </footer>
    )
}



export default Footer;