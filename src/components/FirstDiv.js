import React from "react";
import { Container, Image } from "react-bootstrap";
import NavBar from "./Navbar";
import Blob from "../assets/blob.svg";
const FirstDiv = () => {
  return (
    <>
      <NavBar/>
      <Image src={Blob} style={{ position: "absolute", top: "0" }} />
      <div>
        <p></p>
      </div>
    </>
  );
};
export default FirstDiv;
