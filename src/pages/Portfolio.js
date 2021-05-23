import React, { Component } from 'react';
import {  Row, Col, Container} from 'react-bootstrap';
import PortfolioCard from '../components/Cards/PortfolioCard';
import PortHeader from '../components/PortHeader';
//import PortfolioCard from './components/PortfolioCard';
import ProjectCard from '../components/Cards/ProjectCard';
import Project3Card from '../components/Cards/Project3Card';





export default class Portfolio  extends Component {

    render() {
        return (
            <div>
                <br />
                <Container className="portfolio">
                    <Row>
                    <PortHeader />
                        <Col md={8}>
                            
                            <br />
                            <div>
                                <PortfolioCard />
                            </div>
                           
                            <div>
                                <ProjectCard />
                            </div>
                            <div>
                                <Project3Card />
                            </div>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}
   

