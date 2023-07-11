import React from "react";
import "./about.css"
import ME from "../../asset/about_sunil.jpg"
import Bot1 from "../../asset/bot1.jpg"
import {FaAward} from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {AiFillFolderOpen} from "react-icons/ai";

function About(){
    return <section id="about">
        <h5>Get to know</h5>
        <h2>About Us</h2>
     
     <div className="container about_container">
        <div className="about_me">
             <div className="about_me-image">
              <img src="https://cdn.pixabay.com/photo/2016/12/13/21/20/alien-1905155_1280.png" alt="About Image"></img>
             </div>
        </div>

        <div className="about_content">
           <div className="about_cards">
              <article className="about_card">
              <FaAward className="about_icon"></FaAward>
              <h5>Established</h5>
              <small>since 2011</small>
              </article>

              <article className="about_card">
              <FiUsers className="about_icon"></FiUsers>
              <h5>Alumini Network</h5>
              <small>500+</small>
              </article>

              <article className="about_card">
              <AiFillFolderOpen className="about_icon"></AiFillFolderOpen>
              <h5>Projects</h5>
              <small>10+ ongoing</small>
              </article>
           </div>

           <p>A community with vision of orienting engineering education towards innovation.A huge student community fancies the world of robotics and the club aids this materialization.The club aims at evolving the seeds of knowledge in students,nurturing them into future technocrafts</p>
           <a href="#contact" className="btn btn-primary">Let's Talk</a> 
        </div>
     </div>  
    </section>

}

export default About;