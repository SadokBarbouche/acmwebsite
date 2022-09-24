import React from "react";
import { Button, Form, Col, Container, Row, Image } from "react-bootstrap";
import Logo from "../assets/acm-logo.png";
import "../styles/styles.css";
import NavbarWhenConnected from "./NavbarWhenConnected";
const SignUp = () => {
  return (
    <div
      className=""
      style={{
        backgroundColor: "#003d5b",
        minHeight: "100vh",
      }}
    >
        <NavbarWhenConnected username="nahnouha69" isRh="true" />
      <Container style={{}}>
        <Row className="py-5 ">
          <Col id="signUpLogo" className="d-none d-lg-block">
            <Image  className="px-5 py-5" fluid style={{}} src={Logo} />
          </Col>
          <Col>
            <h1 className="text-center fw-bolder display-3 text-light">
              Join us
            </h1>

            <Form className="px-4" style={{}}>
              <Form.Label className="fs-5 fw-bolder text-light">
                First name
              </Form.Label>
              <Form.Group className="mb-4 " controlId="">
                <Form.Control type="text" placeholder="" className="" />
              </Form.Group>
              <Form.Label className="fs-5 fw-bolder text-light">
                Lastname
              </Form.Label>
              <Form.Group className="mb-2 " controlId="">
                <Form.Control type="text" placeholder="" className="" />
              </Form.Group>
              <Form.Label className="fs-5 fw-bolder text-light">
                Username
              </Form.Label>
              <Form.Group className="mb-2 " controlId="">
                <Form.Control type="text" placeholder="" className="" />
              </Form.Group>
              <Form.Label className="fs-5 fw-bolder text-light">
                Email
              </Form.Label>
              <Form.Group className="mb-2 " controlId="">
                <Form.Control type="email" placeholder="" className="" />
              </Form.Group>
              <Form.Label className="fs-5 fw-bolder text-light">
                Password
              </Form.Label>
              <Form.Group className="mb-2 " controlId="">
                <Form.Control type="password" placeholder="" className="" />
              </Form.Group>
                <Button
                  className="my-4 w-100 fs-5 fw-bolder"
                  style={{
                    backgroundColor: "#FFB703",
                    border: "none",
                    color: "#003d5b",
                  }}
                >
                  Register
                </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SignUp;
