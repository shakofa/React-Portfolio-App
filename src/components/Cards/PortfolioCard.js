import React from 'react';
import {  Card, Button } from 'react-bootstrap';
import "./style.css";

export default function PortfolioCard() {
    return (
        <div>
            <Card style={{ width: '55rem' }} className="card">
                                
                <Card.Body>
                    <Card.Title>1- The Legend of Worda</Card.Title>
                        <Card.Text>
                        The legend of Worda is a simple dictionary search. There contains three containers that displays random words according to the specified etymology posted above. There are a couple of 'keywords' that can be searched and they will bring up custom background pics. These words include: link, hero, dog, cat, shield, sword, owl, ocarina, horse, tunic and legend. There is a contact page used to contact the creators of the page and also an about page that talks about the page and its creators.
                        </Card.Text>
                        <div>
                            
                            <img className="Image" src={process.env.PUBLIC_URL + "/111.png"} width={800} height={500} alt=""/>
                                       
                        </div>
                        <br />
                     
                </Card.Body>
                        <div>
                            <a href="https://github.com/shakofa/word-force">
                            <Button className="btn-info">Github Repository</Button>
                            </a>
                            
                        </div>
                        <br />
                        <div>
                            <a href="https://shakofa.github.io/word-force/">
                            <Button className="btn-info">Deployed Link</Button>
                            </a>
                        </div>
            </Card>
        </div>
    )
}
