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
                                    <Card.Img src="./public/111.png" >
                                       
                                    </Card.Img>
                                    </div>
                                    <br />
                                    <div>
                                    <Button className="btn">Github Repository</Button>
                                    <br />
                                    <Button className="btn">Deployed Link</Button>
                                    </div>
                                </Card.Body>
                                </Card>
        </div>
    )
}
