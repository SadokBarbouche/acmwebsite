import React from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import NavBar from "./Navbar";
import Blob from "../assets/blob.svg";
import FirstDiv from "./FirstDiv";
import "../styles/styles.css";
import SecondDiv from "./SecondDiv";
import ThirdDiv from "./ThirdDiv";
import Members from "./Members";
import Footer from "./Footer";
import NavbarWhenConnected from "./NavbarWhenConnected";

const HomePage = () => {
  return (
    <>
      <NavBar />  
      <FirstDiv />
      <SecondDiv />
      <ThirdDiv />
      <Members />
      <Footer/>
    </>
  );
};
export default HomePage;
