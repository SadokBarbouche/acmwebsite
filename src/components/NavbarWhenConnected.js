import React, { useEffect, useState } from "react";
import {
  Navbar,
  Container,
  NavDropdown,
  Nav,
  Modal,
  Button,
  Image,
  Form,
} from "react-bootstrap";

import Logo from "../assets/acm-logo.png";
import Avatar from "../assets/Avatar.svg";

import "../styles/styles.css";

const NavbarWhenConnected = (props) => {
  useEffect(() => {
    const handleScroll = (event) => {
      window.scrollY > 0
        ? document.getElementById("navbar").classList.add("shadow-lg")
        : document.getElementById("navbar").classList.remove("shadow-lg");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Navbar id="navbar" collapseOnSelect sticky="top" expand="xxl">
      <Container className="text-light">
        <Navbar.Brand className="fs-3 fw-bolder text-dark" href="">
          <Image
            fluid
            style={{ maxHeight: "100px" }}
            className="mb-2"
            src={Logo}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="text-end">
          <Nav className="m-auto">
            <Nav.Link href="" className="fw-bolder text-light fs-5 me-1">
              About us
            </Nav.Link>
            <Nav.Link href="" className="fw-bolder text-light fs-5 me-1">
              Posts
            </Nav.Link>
            <NavDropdown
              title={<span className="w-100 text-light fs-5 me-1">Workshops</span>}
              id="collasible-nav-dropdown"
              className="fw-bolder text-light fs-5 me-1"
            >
              <NavDropdown.Item className="py-3 " href="" style={{}}>
              Competetive Programming
                
              </NavDropdown.Item>
              <NavDropdown.Item className="py-3" href="">
                Cloud Computing
                
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="fw-bolder text-light fs-5">Team</Nav.Link>
            <Nav.Link href="" className="fw-bolder text-light fs-5">
              Contact us
            </Nav.Link>
            <Nav.Link href="" className="fw-bolder text-light fs-5 me-1">
              Coming soon
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link className="fw-bolder" href="">
              <NavDropdown
                title={
                  <span className="text-light fs-6 fw-normal me-1">
                    <Image
                      src={Avatar}
                      className="me-1"
                      style={{ height: "60px" }}
                    />{" "}
                    {props.username}
                  </span>
                }
                id="collasible-nav-dropdown"
                className="fw-bolder text-light fs-5 me-1"
              >
                <NavDropdown.Item className="py-3" href="" style={{}}>
                  Settings
                  <svg
                    style={{ float: "right", marginTop: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                  </svg>
                </NavDropdown.Item>
                <NavDropdown.Item className="py-3" href="" 
                    style={{ float: "right", marginTop: "5px",display:(props.isRh==true ? "" : "none") }}
                
                >
                  Dashboard
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    style={{float:"right",marginTop:"5px"}}
                    fill="currentColor"
                    class="bi bi-clipboard-check"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                    />
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                  </svg>
                </NavDropdown.Item>

                <NavDropdown.Item className="py-3" href="">
                  Logout
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    style={{ float: "right", marginTop: "5px" }}
                    fill="currentColor"
                    class="bi bi-box-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                    />
                  </svg>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavbarWhenConnected;
