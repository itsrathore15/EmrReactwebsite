import React from "react";
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs";

function Experience(){
    return (
        <section id="experience">
          <h5>Technologies we work upon</h5>
          <h2>Technical fields in oragnisation</h2>

          <div className="container experience_container">
               <div className="experience_frontend">
                  {/* <h3></h3> */}
                  <div className="experience_content">
                   <article className="experience_details">
                      <BsPatchCheckFill className="experience_details-icons"></BsPatchCheckFill>
                       <div>
                         <h4>Embedded Systems</h4>
                         <small className="text-light">Existing</small>
                       </div>
                   </article>
                   <article className="experience_details">
                      <BsPatchCheckFill className="experience_details-icons"></BsPatchCheckFill>
                      <div>
                         <h4>DIP</h4>
                         <small className="text-light">Existing</small>
                      </div>
                   </article>
                   <article className="experience_details">
                      <BsPatchCheckFill className="experience_details-icons"></BsPatchCheckFill>
                       <div>
                          <h4>AI/ML</h4>
                          <small className="text-light">Existing</small>
                       </div>
                   </article>
                   <article className="experience_details">
                      <BsPatchCheckFill className="experience_details-icons"></BsPatchCheckFill>
                      <div>
                        <h4>Web development</h4>
                       <small className="text-light">Existing</small>
                      </div>
                   </article>
                  </div>
               </div>

               <div className="experience_frontend">
                  {/* <h3>Other Skills</h3> */}
                  <div className="experience_content">
                   <article className="experience_details">
                      <BsPatchCheckFill className="experience_details-icons"></BsPatchCheckFill>
                       <div>
                          <h4>CAD</h4>
                          <small className="text-light">Newly introduced</small>
                       </div>
                   </article>
                   <article className="experience_details">
                      <BsPatchCheckFill className="experience_details-icons"></BsPatchCheckFill>
                       <div>
                          <h4>3D modelling</h4>
                          <small className="text-light">Newly introduced</small>
                       </div>
                   </article>
                   <article className="experience_details">
                      <BsPatchCheckFill className="experience_details-icons"></BsPatchCheckFill>
                       <div>
                          <h4>Virtual Simulation</h4>
                          <small className="text-light">Newly introduced</small>
                       </div>
                   </article>
                   <article className="experience_details">
                      <BsPatchCheckFill className="experience_details-icons"></BsPatchCheckFill>
                       <div>
                          <h4>Blockchain</h4>
                          <small className="text-light">Newly introduced</small>
                       </div>
                   </article>
                  </div>
               </div>

          </div>

        </section>
    )

}



export default Experience;