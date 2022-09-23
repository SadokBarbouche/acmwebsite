import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import Logo from "../assets/acm-logo.png";

const Login = () => {
  return (
    <div style={{ backgroundColor: "#003d5b", minHeight: "100vh" }}>
      <Container>
        <Row>
          <Col style={{}}>
            <Image fluid src={Logo} className="my-5 py-5" />
          </Col>
          <Col >
            <Form >
              <Form.Group
                className="mb-3 text-light fw-bolder"
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group
                className="mb-3 text-light fw-bolder"
                controlId="formBasicPassword"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group
                className="mb-3 text-light fw-bolder"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Stay logged" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
