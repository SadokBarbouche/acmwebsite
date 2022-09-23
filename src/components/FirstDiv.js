import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import NavBar from "./Navbar";
import Logo from "../assets/acm-logo.png";
import { Fade } from "react-reveal";

const FirstDiv = () => {
  return (
    <>
      <div
        style={{
          height:"75vh",
          backgroundColor: "#003d5b",
        }}
      >

        <Container className="">
          <Row>
            <Col>
              <Fade left>
                <h1 className="display-1 fw-bolder text-light mt-5 pt-5 pb-2">
                  ACM INSAT
                </h1>
                <h1 className="display-5 text-light">STUDENT CHAPTER</h1>
                <p className="text-light">
                  <span className="fw-bolder">
                    ACM, the Association for Computing Machinery
                  </span>{" "}
                  is the world's largest scientific and educational computing
                  society. It is an international organization for academic and
                  scholarly interests in computer science, claiming nearly
                  100,000 student and professional members as of 2019. And it is
                  organized into over 171 local chapters and 37 Special Interest
                  Groups (SIGs), through which it conducts most of its
                  activities.
                </p>
              </Fade>
            </Col>
            <Col className="text-center d-none d-lg-block">
              <Fade right>
                <Image fluid src={Logo} />
              </Fade>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default FirstDiv;
