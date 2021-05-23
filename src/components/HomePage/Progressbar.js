
import React from 'react';
//import ProgressBar from 'react-bootstrap/ProgressBar';
//import "../styles/Progressbar.css";

const ProgressBar = (props) => {
   
    
  
   
   const now = "Native";
  
  
    return (
      <div className="container">
        <div className="filler">
        <ProgressBar now={now} label={`{now}`} />
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
