import React from "react";
import "./portfolio.css"
import IMG1 from "../../asset/portfolio1.jpg";
import IMG2 from "../../asset/portfolio2.jpg";
import IMG3 from "../../asset/portfolio3.jpg";
import IMG4 from "../../asset/portfolio4.jpg";
import IMG5 from "../../asset/portfolio5.png";
import IMG6 from "../../asset/portfolio6.jpg";

function Portfolio(){
    return (
        <section id="portfolio">
            <h5>we take part in annual techfest</h5>
            <h2>Events we organise in Techfest</h2>
            <div className="container portfolio_container">
               <article className="portfolio_item">
                 <div className="portfolio_item-image">
                  <img src="https://cdn.pixabay.com/photo/2023/05/24/17/49/ai-generated-8015425_1280.jpg" alt=""></img>
                 </div>
                   <h3>PIXAR</h3>
                   {/* <a href="https://github.com" className="btn" target="_blank">Details</a> */}
                    <p>An event that tests one's knowledge of image processing and the OpenCV library.Cipher those secrets behind the images</p>
                   {/* <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a> */}
               </article>

               <article className="portfolio_item">
                 <div className="portfolio_item-image">
                  <img src="https://cdn.pixabay.com/photo/2023/05/24/17/49/ai-generated-8015425_1280.jpg" alt=""></img>
                  {/* <img src="https://cdn.pixabay.com/photo/2013/07/12/16/29/android-150996_640.png" alt=""></img> */}
                 </div>
                   <h3>ROBOSOCCER</h3>
                   {/* <a href="https://github.com" className="btn" target="_blank">Github</a> */}
                   <p>A one vs one soccer match between two handmade bots.Score,defend and achieve victory!</p>
                   {/* <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a> */}
               </article>

               <article className="portfolio_item">
                 <div className="portfolio_item-image">
                  <img src="https://cdn.pixabay.com/photo/2023/05/24/17/49/ai-generated-8015425_1280.jpg" alt=""></img>
                   {/* <img src="https://cdn.pixabay.com/photo/2016/04/01/12/15/angry-1300616_640.png" alt=""></img> */}
                 </div>
                   <h3>SIMULATOR</h3>
                   {/* <a href="https://github.com" className="btn" target="_blank">Github</a> */}
                   <p>Simulate complex embedded systems on a simlator software and earn your victory</p>
                   {/* <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a> */}
               </article>

               <article className="portfolio_item">
                 <div className="portfolio_item-image">
                  <img src="https://cdn.pixabay.com/photo/2023/05/24/17/49/ai-generated-8015425_1280.jpg" alt=""></img>
                   {/* <img src="https://cdn.pixabay.com/photo/2014/12/21/23/59/toy-576524_640.png" alt=""></img> */}
                 </div>
                   <h3>MAZE-UP</h3>
                   {/* <a href="https://github.com" className="btn" target="_blank">Github</a> */}
                   <p>Solve a complex 2-D maze at the best time with your autonomous bot</p>
                   {/* <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a> */}
               </article>

               <article className="portfolio_item">
                 <div className="portfolio_item-image">
                  <img src="https://cdn.pixabay.com/photo/2023/05/24/17/49/ai-generated-8015425_1280.jpg" alt=""></img>
                 </div>
                   <h3>BIT CODING</h3>
                   {/* <a href="https://github.com" className="btn" target="_blank">Github</a> */}
                   <p>They say bits are what makes a computer.The event puts you on a trial of bit manipulation</p>
                   {/* <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a> */}
               </article>

                <article className="portfolio_item">
                 <div className="portfolio_item-image">
                  <img src="https://cdn.pixabay.com/photo/2023/05/24/17/49/ai-generated-8015425_1280.jpg" alt=""></img>
                 </div>
                   <h3>Micro-Explorer</h3>
                   <p>Different teams competete against each other to cross the hurdles using their bots</p>
                   {/* <a href="https://github.com" className="btn" target="_blank">Github</a> */}
                   {/* <a href="https://github.com" className="btn btn-primary" target="_blank">Live Demo</a> */}
               </article> 
            </div>
        </section>
    )
}



export default Portfolio;