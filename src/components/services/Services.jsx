import React from "react";
import "./services.css"
import {FaRobot} from "react-icons/fa";

function Services(){
    return (
        <section id="services">
             <h5>Organisations i'm Part of</h5>
             <h2>Embedded Systems And Robotics</h2>

             <div className="container services_container">
               <article className="service">
                  <div className="service_head">
                       <h3>Technical fields in Organisation</h3>
                  </div>
                  <ul className="service_list">
                     <li>
                        <FaRobot className="service_list-icon"/>
                        <p>Embedded Systems</p>
                     </li>
                     <li>
                        <FaRobot className="service_list-icon"/>
                        <p>Digital Image Processing</p>
                     </li>
                     <li>
                        <FaRobot className="service_list-icon"/>
                        <p>ML/AI</p>
                     </li>
                     <li>
                        <FaRobot className="service_list-icon"/>
                        <p>Recent Tech</p>
                     </li>
                  </ul>
               </article>

             </div>
        </section>
    )

}



export default Services;