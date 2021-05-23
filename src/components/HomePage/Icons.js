import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
//import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import "./style.css";


function Icons () {
   
    return (
        <div> 
    
              <div>
              <a
                  href="https://www.linkedin.com/in/shakofa-mahmody-2328a3193">
                    <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                        <FaLinkedin size={40}/>
                    </IconContext.Provider>
                </a>
              </div>  
              <br />              
              <div>
                <a
                  href="https://github.com/shakofa">
                    <IconContext.Provider value={{ color: "black", className: "global-class-name" }}>
                        <FaGithub size={40}/>
                    </IconContext.Provider>
                </a>
              </div>
              <br />
              <div >
               
                <a href="/#">
                  <IconContext.Provider value={{ color: "blue", className: "global-class-name Fa-5x" }}>
                     <FaFacebook size={40} />
                  </IconContext.Provider>
                </a>
              </div>
        
        </div >
    )
}

export default Icons ;