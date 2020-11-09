import React, { Component } from 'react';
import CarouselBox from '../Components/CarouselBox';
import {CardDeck, Container, Card, Button} from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <>
      <CarouselBox/>
      <Container>
        <h2 className="text-center m-4">Our team</h2>
        <CardDeck className="m-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          <Card.Body>
            <Card.Title>Developers</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Card.Text>
            <Button variant="primary">About Team</Button>
          </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          <Card.Body>
            <Card.Title>Developers</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Card.Text>
            <Button variant="primary">About Team</Button>
          </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
          <Card.Body>
            <Card.Title>Developers</Card.Title>
            <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </Card.Text>
            <Button variant="primary">About Team</Button>
          </Card.Body>
          </Card>
        </CardDeck>
      </Container>
      </>
    );
  }
}

export default Home;
