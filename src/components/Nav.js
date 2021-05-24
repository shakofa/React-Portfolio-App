import React  from "react";
import { Link } from "react-router-dom";
//import { FaAlignRight } from 'react-icons/fa';
import "./nav.css";
import Navbar from 'react-bootstrap/Navbar';
//import Nav from 'react-bootstrap/Nav';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
// function Nav() {
     
//       return (
//         <nav className="navbar  navbar-expand-lg  fluid ">
//           <h1 className="navbar-brand" ><strong>Shakofa Mahmody</strong></h1>
          
//             <ul className="navbar">
//               <li className="nav-item ">
//                 <Link
//                   to="/"
//                   className={
//                     window.location.pathname === "/" || window.location.pathname === "/home"
//                       ? "nav-link active"
//                       : "nav-link"
//                   }
//                 >
//                   Home
//                 </Link>
//               </li> 
//               <li className="nav-item">
//                 <Link
//                   to="/portfolio"
//                   className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
//                 >
//                   Portfolio
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   to="/contact"
//                   className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
          
//         </nav>
//       );
// }



// export default Nav;

function Navigation(){

  return(

    <Navbar collapseOnSelect expand="lg" className="bar" >
      <h3 className="h3" >Shakofa Mahmody</h3>
      
      <Navbar id="responsive-navbar-nav">
          
                <Link
                  to="/"
                  className={
                  window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
                  }
                >
                  Home
                </Link>
             
                <Link
                  to="/portfolio"
                  className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                  >
                  Portfolio
                </Link>
              
                <Link
                  to="/contact"
                  className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                  >
                    Contact
                  </Link>
      </Navbar>
    </Navbar>
  
  )
}


export default Navigation;