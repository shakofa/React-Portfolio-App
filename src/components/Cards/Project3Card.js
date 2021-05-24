import React from 'react';
import {  Card, Button } from 'react-bootstrap';
import "./style.css";

export default function Project3Card() {
    return (
        <div>
             <Card style={{ width: '55rem' }} className="card">
                                
                                <Card.Body>
                                    <Card.Title>3-Bandstand</Card.Title>
                                    <Card.Text>
                                    This is our project 3. it is underconstruction and will be added here soon.
                                    </Card.Text>
                                    <div>
                                    
                                    <img className="Image" src={process.env.PUBLIC_URL + "/pro3.png"} width={800} height={500}  alt="img"/>
                                    
                                    </div>
                                    <br />
                                    
                                </Card.Body>
                                <div>
                                    <Button className="btn-info">Github Repository</Button>
                                  
                                    </div>
                                    <br />
                                    <div>
                                    <Button className="btn-info">Deployed Link</Button>
                                    </div>
                                </Card>
        </div>
    )
}
