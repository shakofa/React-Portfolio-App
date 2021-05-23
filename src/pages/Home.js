import React, { Component } from 'react';
import Header from '../components/HomePage/Header';
import {Row, Table, Container} from 'react-bootstrap';
//import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
//import { Table } from 'bootstrap';
//import { Link } from "react-router-dom";
import Progressbar from "../components/HomePage/Progressbar";
import SkillTable from "../components/HomePage/SkillTable";
import Icons from "../components/HomePage/Icons";
//import Container from "../components/Container";
import "./style.css";
import Img from "../components/HomePage/Img";
export default class Home  extends Component {
    render() {
        return (
            <div className="homediv">
              <br/> 
              <br />
                <Row>
                    <Col md={{ span:10, offset: 1}}>
                        <Header />
                    </Col>
                </Row>
               <Container> 
               
                    <Row className="R">  {/*display="flex" */}

                        <Col md={{ span: 3, offset: 0 }} >
                            <div>
                            <Img />
                            </div>
                            <br />
                             <p className="p">Fullstack Developer</p>
                            
                             <div>
                                <a href="https://drive.google.com/file/d/1--2fEOCga_NUrnM1N3i-rdQ_YlSYvw5c/view?usp=sharing">
                                    <button type="submit" className="b">Resume</button>
                                </a>
                            </div>
                            <br />
                            <div>
                                <Table responsive="md">
                                    <tbody>
                                    <tr>
                                        <td><strong>Address:</strong></td>
                                        <td>Folsom, California</td>
                                      
                                    </tr>
                                    <tr>
                                        <td><strong>Email:</strong></td>
                                        <td>jas.mahmody@gmail.com</td>
                                        
                                    </tr>
                                    <tr>
                                        <td><strong>Phone:</strong></td>
                                        <td>+1 2244092447</td>
                                    
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                            <h5 >Languages</h5>
                            <p className="L">Persian</p>

                            <Progressbar /> 

                        </Col>
                        <br /><br />
                        <Col md={{ span: 8, offset: 0 }}>

                            <h3>--UNDER CONSTRUCTION!--</h3>
                            <br />
                            <div>
                                Hello, I am Shakofa Mahmody!
                                I am a Fullstack Web Developer. I have learned programming languages for over few months from coding bootcamp and online programming resources. I have experience with javascript, CSS, HTML, nodejs, Express, EC6, jquery. I love interacting with people and would love to work in group projects. I am still learning and at the same time looking for new jobs and opurtunities in programming.
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
                        <Col md={{ span: 1, offset: 0 }} >
                            <Icons />
                        </Col>
                        
                    </Row>
               </Container>
            </div>
        )
    }
}   

