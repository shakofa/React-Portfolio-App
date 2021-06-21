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
                        This is a Mern stack app that utilizes socket.io and many other thechnologies to run a functional, responsive chatroom application. This chatroom app is build for Spotify users who are using spotify prime to listen to music. The users are able chat at the same time they are listing to spotify music.
                    </Card.Text>
                    <div>
                                    
                        <img className="Image" src={process.env.PUBLIC_URL + "/pro3.png"} width={800} height={500}  alt="img"/>
                                    
                    </div>
                    <br />
                                    
                </Card.Body>
                    <div>
                        <a href="https://github.com/shakofa/Bandstand/tree/main"><Button className="btn-info">Github Repository</Button></a>
                    </div>
                    <br />

                    <div>
                        <a href="https://bandstandv1.herokuapp.com/"><Button className="btn-info">Deployed Link</Button></a>
                                    
                    </div>
            </Card>
        </div>
    )
}
