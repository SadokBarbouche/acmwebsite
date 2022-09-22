import React from "react";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import Logo from "../assets/acm-logo.png";
import facebook from "../assets/facebookfooter.svg";
import instagram from "../assets/instagramfooter.svg";
import linkedin from "../assets/linkedinfooter.svg";
import mail from "../assets/gmail.svg";
import "../styles/styles.css";
import { Slide } from "react-reveal";
const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#005a83" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(0, 121, 169)"
            fill-opacity="1"
            d="M0,128L48,117.3C96,107,192,85,288,106.7C384,128,480,192,576,197.3C672,203,768,149,864,149.3C960,149,1056,203,1152,197.3C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
        <Container className="mb-5 pb-5 mt-3">
          <Row>
            <Col style={{}}>
              <Container className="mb-5" style={{}}>
                <Row
                  className=""
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Slide left>
                    <Col
                      className="mt-3 py-2 px-2 contact"
                      style={{
                        display: "flex",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        fill="rgb(204, 204, 204)"
                        class="bi bi-geo-alt-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>

                      <div>
                        <h1 className="fw-bolder text-light">Address</h1>
                        <p className="text-light fw-bolder">
                          676 INSAT Centre Urbain Nord BP، Tunis Cedex 1080
                          Tunis, Tunisia
                        </p>
                      </div>
                    </Col>
                    <Col
                      style={{ display: "flex" }}
                      className="py-2 px-2 mt-3 contact"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="70"
                        height="70"
                        fill="rgb(204, 204, 204)"
                        class="bi bi-mailbox"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
                        <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
                      </svg>
                      <div className="px-2">
                        <h1 className="text-light fw-bolder">Email</h1>
                        <p className="text-light fw-bolder">
                          bribesh1234@gmail.com
                        </p>
                      </div>
                    </Col>
                  </Slide>
                </Row>
              </Container>
            </Col>
            <Col className="text-light">
              <Slide right>
                <p className="fw-bolder fs-1">Contact us</p>
                <Form className="text-center">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Your email" />
                  </Form.Group>
                  <Form.Control
                    placeholder="Your message"
                    className="mb-2"
                    as="textarea"
                    rows={3}
                  />

                  <Button
                    style={{ width: "100%", border: "1px solid white" }}
                    variant="primary"
                    className="fw-bolder fs-6 bg-transparent"
                    type="submit"
                  >
                    Send
                  </Button>
                </Form>
              </Slide>
            </Col>
          </Row>
        </Container>
        <Container style={{ backgroundColor: "#005a83" }}>
          <Row className="text-md-start text-sm-center">
            <Form.Label className="fs-4 text-light fw-bolder mt-3">
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
            <Col className="text-center mt-xxs-2 mt-md-0">
              <Button
                className="ms-md-5 mt-sm-3 mt-md-0 w-75 fw-bolder fs-5 subscribebtn"
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
              <a href="" className="me-2" style={{ textDecoration: "none" }}>
                {" "}
                <Image src={mail} style={{ margin: "2px" }} />
              </a>
            </div>
            <br />
            <span className="fw-bolder text-light">
              Copyright © 2022 ACM INSAT STUDENT CHAPTER - All rights reserved
            </span>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Footer;
