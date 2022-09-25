import React from "react";
import Logo from "../assets/ACM_WHITE_LOGO.png";

import { Container, Form, Row, Col, Image, Button } from "react-bootstrap";
import { Fade, Slide } from "react-reveal";
const Settings = () => {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#003d5b" }}
      className="text-light"
    >
      <Container>
        <h2 className="display-1 fw-bolder">
          Settings
          <span style={{float:"right"}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-gear"
              viewBox="0 0 16 16"
            >
              <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
              <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
            </svg>
          </span>
        </h2>

        <hr />
        <Row>
          <Col>
              <Form.Label className=" fw-bolder text-light">
                First name
              </Form.Label>
              <Form.Group className="mb-4 " controlId="">
                <Form.Control
                  type="text"
                  placeholder="Edit your first name"
                  className=""
                />
              </Form.Group>

              <Form.Label className=" fw-bolder text-light">
                Last name
              </Form.Label>
              <Form.Group className="mb-4 " controlId="">
                <Form.Control
                  type="text"
                  placeholder="Edit your last name"
                  className=""
                />
              </Form.Group>

              <Form.Label className=" fw-bolder text-light">
                Email
              </Form.Label>
              <Form.Group className="mb-4 " controlId="">
                <Form.Control
                  type="text"
                  placeholder="Edit your last email"
                  className=""
                />
              </Form.Group>


              <Form.Label className=" fw-bolder text-light">
                Change your password
              </Form.Label>
              <Form.Group className="mb-4 " controlId="">
                <Form.Control
                  type="password"
                  placeholder="Change your password"
                  className=""
                />
              </Form.Group>

              <Form.Label className=" fw-bolder text-light">
                Confirm your password
              </Form.Label>
              <Form.Group 
                  className="mb-4"
              
              controlId="">
                <Form.Control
                  type="password"
                  className=""
                  placeholder="Reenter your new password"
                />
              </Form.Group>
              <Button
            className="mb-4 fs-5 fw-bolder w-100 mt-4 "
            style={{ color: "#003d5b",border:"none", backgroundColor: "#ffb703" }}
          >
            Save
          </Button>
          </Col>
          <Col className="d-none d-md-block">
              <Image src={Logo} fluid style={{ marginTop: "-40px" }} />
          </Col>
        </Row>
        <hr />
        <div className="text-center">
         
        </div>
      </Container>
    </div>
  );
};
export default Settings;
