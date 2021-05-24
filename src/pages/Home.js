import React, { Component } from 'react';
import Header from '../components/HomePage/Header';
import {Row, Table, Container} from 'react-bootstrap';
//import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
//import { Table } from 'bootstrap';
//import { Link } from "react-router-dom";
//import Progressbar from "../components/HomePage/Progressbar";
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
                <Row>
                    <Col md={{ span:10, offset: 1}}>
                        <Header />
                    </Col>
                </Row>
               <Container> 
               
                    <Row className="R">  {/*display="flex" */}

                        <Col md={{ span: 3, offset: 0 }} >
                            <div>
                            <img className="I" src={process.env.PUBLIC_URL + "/me.jpg"} width={200} height={200} alt="" />

                            </div>
                            <br />
                             <p className="p">Fullstack Developer</p>
                            <br />
                             <div>
                                <a href="https://drive.google.com/file/d/1--2fEOCga_NUrnM1N3i-rdQ_YlSYvw5c/view?usp=sharing">
                                    <button type="submit" className="b">Resume</button>
                                </a>
                            </div>
                            <br />
                            <br/>
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
                            <br />
                            <br/>
                            <h5 >Languages</h5>
                            <br />
                            <p className="L"><strong>Persian </strong> = Native</p>
                            <p className="L"><strong>English </strong> = Fluent</p>

                           
                        </Col>
                        <br /><br />
                        <Col md={{ span: 8, offset: 0 }}>

                            <h3>--UNDER CONSTRUCTION!--</h3>
                            <br />
                            <br />
                            <div>
                                <p>
                                Hello, I am Shakofa Mahmody!
                                I am a Fullstack Web Developer. I have learned programming languages for over few months from coding bootcamp and online programming resources. I have experience with javascript, CSS, HTML, nodejs, Express, EC6, jquery. I love interacting with people and would love to work in group projects. I am still learning and at the same time looking for new jobs and opurtunities in programming.
                                </p>
                            </div>
                            <br />
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

