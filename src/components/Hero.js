import React from "react";
import "../App.css"; 

function Hero() {
    return (
        <section id="hero">
            <img src="/FitnessB-g.webp" alt="Fitness B-Ground." className="hero-image" />
            <div className="hero-content">
              <h2>Fit body, fit mind, fit life.</h2>
                         
                <button className="hero-button">Login</button>
                <div>
               <p>
                <span className="no-account">DON'T HAVE ACCOUNT?</span>
                 <span className="signup-text" onClick={() => window.location.href ="http://localhost:3000/signup"}>SignUp</span>
               </p>
              
                </div>
               
             
            </div>
        </section>
    );
}

export default Hero;
