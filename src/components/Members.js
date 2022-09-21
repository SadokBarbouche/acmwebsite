import React from "react";
import { Container, Row } from "react-bootstrap";
import Member from "./Member";
import pres from "../assets/amenibch.jpg";
import vicepres from "../assets/karimbnbbkr.jpg";
import trainer from "../assets/khalilbnabdlh.jpg";
import logistics from "../assets/daliselmi.jpg";
import tresorier from "../assets/mariemkilani.jpg";
import webmaster from "../assets/bahabouali.jpg";
import dalizghlmi from "../assets/dalizghlmi.jpg";
import mariemksntini from "../assets/mariemksntini.jpg";
import media from "../assets/rayenbkhch.jpg";
import joker from "../assets/achrafkrbl.jpg";
import cloudmanager from "../assets/oumaymabtlb.jpg";

import { Slide } from "react-reveal";

const Members = () => {
  return (
    <div style={{ backgroundColor: "#428bca" }} className="">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#005a83"
          fill-opacity="1"
          d="M0,128L48,117.3C96,107,192,85,288,106.7C384,128,480,192,576,197.3C672,203,768,149,864,149.3C960,149,1056,203,1152,197.3C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <Container>
        <Slide right>
          <p className="text-center display-1 fw-bolder text-light mb-5">
            Meet our executive board
          </p>
        </Slide>

        <Row
          className="gx-3 gy-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Member person={pres} fb="#"/>
          <Member person={vicepres} />
          <Member person={media} />
          <Member person={trainer} />
          <Member person={cloudmanager} />
          <Member person={logistics} />
          <Member person={tresorier} />
          <Member person={webmaster} />
          <Member person={dalizghlmi} />
          <Member person={mariemksntini} />
          <Member person={joker} />

        </Row>
      </Container>
    </div>
  );
};

export default Members;
