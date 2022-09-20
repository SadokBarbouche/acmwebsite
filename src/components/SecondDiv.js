import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Zoom } from "react-reveal";
const SecondDiv = () => {
  return (
    <div style={{ backgroundColor: "rgb(0, 121, 169)", height: "1000px" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#005a83"
          fill-opacity="1"
          d="M0,64L30,53.3C60,43,120,21,180,48C240,75,300,149,360,186.7C420,224,480,224,540,224C600,224,660,224,720,208C780,192,840,160,900,154.7C960,149,1020,171,1080,170.7C1140,171,1200,149,1260,138.7C1320,128,1380,128,1410,128L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>

      <Container>
        <h1
          style={{ marginTop: "-50px" }}
          className="text-light text-center display-1 fw-bolder "
        >
          Our activities
        </h1>
        <Zoom>
          <h1 className="text-center my-5">Blaset tsawer yaaml rabi</h1>
        </Zoom>
      </Container>
    </div>
  );
};

export default SecondDiv;
