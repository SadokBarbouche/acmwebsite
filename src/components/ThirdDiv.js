import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Fade, Flip, Rotate, Slide, Zoom } from "react-reveal";

import cp from "../assets/cp.svg";
import cloud from "../assets/cloud.svg";

const ThirdDiv = () => {
  return (
    <div style={{ backgroundColor: "#003d5b" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#035294"
          fill-opacity="1"
          d="M0,64L60,106.7C120,149,240,235,360,245.3C480,256,600,192,720,144C840,96,960,64,1080,85.3C1200,107,1320,181,1380,218.7L1440,256L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <Container className="text-center">
        <Slide left>
          <p 
          id="workshops"
          className="display-1 text-center fw-bolder text-light mb-2">
            Our Workshops
          </p>
          <p
            style={{ color: "rgb(204, 204, 204)" }}
            className="fs-4 fw-bolder mb-5"
          >
            We offer high quality and instructive workshops. We enjoy sharing
            our expertise with you.
          </p>
        </Slide>
        <Fade>
          <Row
            className="gy-3 mx-0 mx-md-0 pb-3"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Col
              md={5}
              sm={12}
              className=" me-md-5 py-3 workshop " 
              style={{
                border: "1px solid #ffb703 ",
                borderRadius: "15px",
                backgroundColor: "#003D5B",
              }}
            >
              <Flip right>
                <Image src={cp} fluid className="" />
              </Flip>

              <h1 className="fs-4 text-light fw-bolder text-center mt-5">
                Competetive programming
              </h1>
              <Zoom left>
                <p className="px-md-4" style={{ color: "#EFEFEF" }}>
                  Introduction to competetive programming starting from
                  programming basics to much more advanced topics made easy
                  thanks to our brilliant trainers.
                </p>
              </Zoom>
            </Col>
            <Col
              md={5}
              className="workshop me-md-5 py-3 text-center"
              style={{
                border: "1px solid #ffb703 ",
                borderRadius: "15px",
                backgroundColor: "#003D5B",
              }}
            >
              <Flip left>
                <Image src={cloud} fluid className="w-75" />
              </Flip>

              <h1 className="fs-4 text-light fw-bolder text-center mt-5">
                Cloud
              </h1>
              <Zoom right>
                <p className="px-md-4" style={{ color: "#EFEFEF" }}>
                  Finally cloud is here ladies and gentlemen! And we are eager
                  to begin this new journey with you starting from zero to hero.
                </p>
              </Zoom>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
};

export default ThirdDiv;
