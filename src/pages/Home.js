import React, { Component } from 'react';
import Header from '../components/Header';
import {Row, Col, Container } from 'react-bootstrap';

export default class Home  extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Container fluid>
                    <Row>
                        <Col xs={6} md={4}>

                        <h1>hi</h1>
                        </Col>
                        <Col xs={6} md={4}>
                        <h1>hihihih</h1>
                        </Col>
                        <Col xs={6} md={4}>
                        <h1>jdfhvkjdhfvjk</h1>
                        </Col>
                    </Row>
                </Container>
              
            </div>
        )
    }
}   

