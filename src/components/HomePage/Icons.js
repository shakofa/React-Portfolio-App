import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import "./style.css";


function Icons () {
   
    return (
        <div> 
    
              <div>
                <Link to="https://www.facebook.com/">
                  <IconContext.Provider value={{ color: "purple", className: "global-class-name Fa-5x" }}>
                     <FaFacebook size={40} />
                  </IconContext.Provider>
                </Link>
              </div>                
              <div>
                <Link
                  to="https://github.com/shakofa">
                    <IconContext.Provider value={{ color: "purple", className: "global-class-name" }}>
                        <FaGithub size={40}/>
                    </IconContext.Provider>
                </Link>
              </div>

              <div >
                <Link
                  to="https://www.linkedin.com/in/shakofa-mahmody-2328a3193/">
                    <IconContext.Provider value={{ color: "purple", className: "global-class-name" }}>
                        <FaLinkedin size={40}/>
                    </IconContext.Provider>
                </Link>
              </div>
        
        </div >
    )
}

export default Icons ;