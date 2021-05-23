import React from 'react';
import Image from 'react-bootstrap/Image';

function Img() {
    return (
        <div>
             <Image 
                            className="I" 
                            src="Image1.jpg"
                            width={200} 
                            height={200} 
                            roundedCircle/>
        </div>
    )
}
export default Img;