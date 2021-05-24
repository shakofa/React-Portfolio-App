import React from 'react';
import {  Card, Button } from 'react-bootstrap';
import "./style.css";

export default function ProjectCard() {
    return (
        <div>
             <Card style={{ width: '55rem' }} className="card">
                                
                                <Card.Body>
                                    <Card.Title> 2-Fantastic Fitness Tracker</Card.Title>
                                    <Card.Text>
                                       
                                        This Full-Stack project is a great app to track your daily fitness activities. When the user opens the application, they will be directed to a login page. Once logged in, the user will be able to create a completely customized workout rutines!
                                    </Card.Text>
                                    <div>
                                    <Card.Img src={process.env.PUBLIC_URL + "/Image1.jpg"} width={800} height={500}/>
                                  
                                    </div>
                                    <br />
                                   
                                </Card.Body>
                                <div>
                                    <a href="https://github.com/shakofa/fantastic_fitnessTracker">
                                    <Button className="btn-info">Github Repository</Button>
                                    </a>
                                    </div>
                                    <br/>
                                <div><a href="https://fantastic-fitness-tracker.herokuapp.com/" >
                                <Button className="btn-info">Deployed Link</Button>
                                    </a></div>
                                </Card>
        </div>
    )
}
