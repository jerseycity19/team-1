import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './styles/mel-style.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.png';
import frame from './images/Frame.png';
import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

class LandingPage extends React.Component {
  render() {
    return(
      <div>
        <TopNavBar />
        <Content />
        <FillOutFormButton />
        <ImageFrame />
      </div>
    );
  }
}

class TopNavBar extends React.Component {
  render() {
    return(
      <Container>
        <Row>
          <Col sm={{ span: 4 }}>
            <img src={logo} className="imageStyles"></img>
          </Col>
          <Col sm={{ span: 6}} className="NavbarStyles">
            Protecting scholars and the freedom to think, question, and share ideas
          </Col>
          <Col sm={{ span: 2}} className="NavbarStyles">
            <NavLink to="/login">Login</NavLink>
          </Col>
        </Row>
      </Container>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <Container className="default-text">
        <Row>
          <Col sm={{ span: 10, offset: 1 }} className="ContentStyles">
            Scholars at Risk protects scholars suffering grave threats to their lives, 
            liberty and well-being by arranging temporary research and teaching positions at institutions 
            in our network as well as by providing advisory and referral services.
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 1 }} className="ContentStyles">
            Scholars at Risk has established several initiatives to identify, 
            document and take action in response to attacks on scholars, 
            students and their higher education communities.
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 1 }} className="ContentStyles">
            Around the world, the space for free inquiry and expression is shrinking. 
            Scholars at Risk convenes faculty, students and higher education community members to 
            discuss global and regional academic freedom climates and to develop solutions 
            that strengthen the university space.
          </Col>
        </Row>
      </Container>
    );
  }
}

class FillOutFormButton extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm= {{ span: 8, offset: 2 }}>
            <Form>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I understand and agree that the data I submit will be used anonymously
                                                   in reports, studies and advocacy about self-censorship" className="CheckBoxStyles"/>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row>
          <NavLink to="/definition">
            <button className="ButtonStyles">
              Fill Out Form
            </button>
          </NavLink>
        </Row>
      </Container>
    );
  }
}

class ImageFrame extends React.Component {
  render() {
    return (
      <div>
        <img src={frame} className="imageFrame"></img>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
