import React, { Component } from 'react';
import Header from '../components/HomePage/Header';
import {Row, Table, Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
//import { Table } from 'bootstrap';
//import { Link } from "react-router-dom";
//import Progressbar from "../components/Progressbar";
import SkillTable from "../components/HomePage/SkillTable";
import Icons from "../components/HomePage/Icons";
//import Container from "../components/Container";
import "./style.css";
export default class Home  extends Component {
    render() {
        return (
            <div className="homediv">
              <br/> 
              <br />
         
              
               <Container> 
              <Header></Header>
                      <Row >  {/*display="flex" */}

                     
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
                                        <td>exampley@gmail.com</td>
                                        
                                    </tr>
                                    <tr>
                                        <td>Phone:</td>
                                        <td>+1111111</td>
                                    
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <h4 >Languages</h4>
                            <p>Persian</p>

                            {/*<Progressbar /> */}

                        </Col>
                        <Col lg={6}>

                            <h2>UNDER CONSTRUCTION!</h2>
                            <div>
                                
                                hello world
                            </div>
                            <br />

                            <h2>
                                Programming Skills
                            </h2>

                            <p>(MERN Stack)</p>
                            <br />

                            <div>
                                <SkillTable />
                            </div>

                        </Col>
                        <Col xs={2} >
                            <Icons />
                        </Col>
                    </Row>
               </Container>
            </div>
        )
    }
}   

