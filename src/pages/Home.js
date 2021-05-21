import React, { Component } from 'react';
import Header from '../components/Header';
import {Row, Table, Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
//import { Link } from "react-router-dom";
import Progressbar from "../components/Progressbar";

export default class Home  extends Component {
    render() {
        return (
            <div className="main">
              <br/> 
              <br />
                <Container />
                <Header></Header>
                
                    <Row >
                        <br />
                        <Col md={4} >
                            <div>
                            <Image 
                            className="Image" 
                            src="me.jpg" 
                            width={200} 
                            height={200} 
                            roundedCircle/>
                            </div>
                             <p>Fullstack Developer</p>
                            
                             <div>
                                <a href="https://drive.google.com/file/d/1--2fEOCga_NUrnM1N3i-rdQ_YlSYvw5c/view?usp=sharing">
                                    <button type="submit" className="btn  btn-block">Resume</button>
                                </a>
                            </div>
                            <br />
                            <div>
                                <Table responsive="md">
                                    <tbody>
                                    <tr>
                                        <td>Address:</td>
                                        <td>Folsom, California</td>
                                      
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>jas.Mahmody@gmail.com</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Phone:</td>
                                        <td>+1 2244092447</td>
                                    
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <h4 >Languages</h4>
                            <p>Persian</p>
                            
                               

                            <Progressbar />

                                
                        

                        </Col>
                        <Col lg={6}>

                    
                        
                        </Col>
                        <Col xs={2} >
                        <h1>col3</h1>
                        </Col>
                    </Row>
                
              
            </div>
        )
    }
}   

