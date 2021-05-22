import React, { Component } from 'react';
import ContactHeader from '../components/ContactHeader';
import { Form, Button } from 'react-bootstrap/';
import "./style.css";

export default class Contact  extends Component {
    render() {
        return (
            <div>
                <ContactHeader />
            
                <Form className="form">
                    <h1>Contact</h1>
                    <br />
                    <hr />
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="name" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <br />
                    <Button className="btn" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
   

