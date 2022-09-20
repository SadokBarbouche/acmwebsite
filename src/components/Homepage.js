import React from "react";
import { Container, Image } from "react-bootstrap";
import NavBar from "./Navbar";
import Blob from "../assets/blob.svg";
import FirstDiv from "./FirstDiv";
import "../styles/styles.css";
import SecondDiv from "./SecondDiv";
import ThirdDiv from "./ThirdDiv";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <FirstDiv />
      <SecondDiv />
      <ThirdDiv />
    </>
  );
};
export default HomePage;
