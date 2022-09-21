import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import Logo from "../assets/acm-logo.png";
import facebook from "../assets/facebookfooter.svg";
import instagram from "../assets/instagramfooter.svg";
import linkedin from "../assets/linkedinfooter.svg";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#005a83" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#428bca"
            fill-opacity="1"
            d="M0,128L48,117.3C96,107,192,85,288,106.7C384,128,480,192,576,197.3C672,203,768,149,864,149.3C960,149,1056,203,1152,197.3C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <Container style={{ backgroundColor: "#005a83" }}>
          <Row className="text-md-start text-sm-center">
            <Form.Label className="fs-4 text-light fw-bolder">
              Subscribe to our newsletter
            </Form.Label>
            <Col md={8} sm={12}>
              <Form>
                <Form.Group
                  className="pb-md-5 w-100"
                  controlId="formBasicEmail"
                >
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Form>
            </Col>
            <Col className="text-sm-center text-md-end">
              <Button
                className="ms-md-5 mt-sm-3 mt-md-0 w-75 fw-bolder fs-5"
                style={{ backgroundColor: "rgb(0, 121, 169)" }}
              >
                Subscribe
              </Button>
            </Col>
          </Row>

          <div
            className="text-center pb-3"
            style={{ backgroundColor: "#005a83" }}
          >
            <Image style={{ width: "15%" }} fluid src={Logo} />
            <hr style={{ color: "white" }} />
            <div
              className="text-center mt-3"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <a href="" className="me-2" style={{ textDecoration: "none" }}>
                <Image src={facebook} style={{ margin: "2px" }} />{" "}
              </a>
              <a href="" className="me-2" style={{ textDecoration: "none" }}>
                <Image src={linkedin} style={{ margin: "2px" }} />
              </a>
              <a href="" className="me-2" style={{ textDecoration: "none" }}>
                {" "}
                <Image src={instagram} style={{ margin: "2px" }} />
              </a>
            </div>
            <br/>
          <span className="fw-bolder text-light">
          Copyright ©2022 All rights reserved | ACM INSAT STUDENT CHAPTER
          </span>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Footer;
