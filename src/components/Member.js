import React from "react";
import { Col, Container, Image } from "react-bootstrap";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import { Flip, Slide, Zoom } from "react-reveal";
import "../styles/styles.css";

const Member = (props) => {
  return (
    <Col md={4} sm={12}>
      <Slide bottom>
        <Image
          className="board"
          fluid
          src={props.person}
          style={{ border: "4px solid #ffb703", borderRadius: "30px" }}
        />
        <div
          className="text-center mt-3"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <a href={props.fb} target="blank" style={{ textDecoration: "none" }}>
            <Image src={facebook} style={{ margin: "2px",color:"" }} />{" "}
          </a>
          <a href={props.linkedin} target="blank" style={{ textDecoration: "none" }}>
            <Image src={linkedin} style={{ margin: "2px" }}  className="ms-1"/>
          </a>
        </div>
      </Slide>
    </Col>
  );
};

export default Member;
