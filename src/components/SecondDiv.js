import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Fade, Zoom } from "react-reveal";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import act1 from "../assets/act1.jpg";
import act2 from "../assets/act2.jpg";
import act3 from "../assets/act3.jpg";
import act4 from "../assets/act4.jpg";

import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/styles.css";
const SecondDiv = () => {
  return (
    <div style={{ backgroundColor: "rgb(0, 121, 169)" }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#005a83"
          fill-opacity="1"
          d="M0,64L30,53.3C60,43,120,21,180,48C240,75,300,149,360,186.7C420,224,480,224,540,224C600,224,660,224,720,208C780,192,840,160,900,154.7C960,149,1020,171,1080,170.7C1140,171,1200,149,1260,138.7C1320,128,1380,128,1410,128L1440,128L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>

      <Container className="pb-5">
        <Fade>
          <h1 className="text-light text-center display-1 fw-bolder ">
            Our activities
          </h1>
          <h2 className="text-center fs-5 mt-4 mb-5" style={{ color: "#ccc" }}>
            <span className="fw-bolder fs-4">ACM INSAT STUDENT CHAPTER</span>{" "}
            takes events to a whole new level. <br />
            <span className="fw-bolder fs-3">Join us</span> and be part of the
            next adventure.
          </h2>
        </Fade>

        <Zoom>
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper text-center "
          >
            <SwiperSlide>
              <Image
                className="w-75"
                src={act1}
                style={{ borderRadius: "15px", border: "5px solid black" }}
                fluid
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-75"
                src={act2}
                style={{ borderRadius: "15px", border: "5px solid black" }}
                fluid
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-75"
                src={act3}
                style={{ borderRadius: "15px", border: "5px solid black" }}
                fluid
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-75"
                src={act4}
                style={{ borderRadius: "15px", border: "5px solid black" }}
                fluid
              />
            </SwiperSlide>
          </Swiper>
        </Zoom>
      </Container>
    </div>
  );
};

export default SecondDiv;
