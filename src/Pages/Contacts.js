import React, { Component } from 'react';
import { Container, Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class Contacts extends Component {
  render() {
    return (
      
      <Container style={{width:'500px'}}>
        <h1 className="text-center">Contact Us</h1>
        <Form>
          <Form.Group controlId="controlBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control input="email" placeholder="Enter Email"/>
            <Form.Text>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="controlBasicPassword">
            <Form.Label>Example Textarea</Form.Label>
            <Form.Control as="textarea" rows="3"/>
          </Form.Group>

          <Form.Group controlId="controlBasicCheck">
            <Form.Check type="checkbox" label="Check me out"/>
          </Form.Group>
          
          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Container>
      
    );
  }
}

export default Contacts;
