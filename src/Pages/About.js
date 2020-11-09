import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column mt-2">
                <Nav.Item>
                  <Nav.Link eventKey="first">Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="first">
                  <img width="100%" height={500} src="https://speckyboy.com/wp-content/uploads/2019/11/free-figma-ui-tmeplate-13.jpg" alt="first-mg"/>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>            
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <img width="100%" height={500} src="https://miro.medium.com/max/7084/0*57WulFyKoXg_KTvM.jpg" alt="first-mg"/>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>            
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <img width="100%" height={500} src="https://file.mockplus.com/image/2018/12/853da7df-ee76-41a8-a27e-1eff3395df46.png" alt="first-mg"/>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>            
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <img width="100%" height={500} src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://www.systemseeders.com/wp-content/uploads/2018/04/blog-banner.jpg" alt="first-mg"/>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>            
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <img width="100%" height={500} src="https://miro.medium.com/max/2800/1*ItGd7Itb99Cr6rE4qVD8wg.png" alt="first-mg"/>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  </p>            
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>      
        </Tab.Container>
      </Container>    );
  }
}

export default About;
