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
import { Link } from "react-scroll";
import Logo from "../assets/acm-logo.png";
import "../styles/styles.css";

const NavBar = () => {
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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar id="navbar"  collapseOnSelect sticky="top" expand="xxl">
      <Container className="text-light">
        <Navbar.Brand
          className="fs-3 fw-bolder text-dark"
          href=""
          onClick={() => document.getElementById("homepage").scrollIntoView()}
        >
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
            <Nav.Link
              onClick={() =>
                document.getElementById("homepage").scrollIntoView()
              }
              className="fw-bolder text-light fs-5 me-1"
            >
              About us
            </Nav.Link>
            <Nav.Link
              onClick={() => document.getElementById("posts").scrollIntoView()}
              href=""
              className="fw-bolder text-light fs-5 me-1"
            >
              Posts
            </Nav.Link>
            <NavDropdown
              title={
                <span
                  className=" text-light fs-5 me-1"
                  onClick={() =>
                    document.getElementById("workshops").scrollIntoView()
                  }
                >
                  Workshops
                </span>
              }
              id="collasible-nav-dropdown"
              className="fw-bolder text-light fs-5 me-1"
            >
              <NavDropdown.Item className="py-3 " href="" style={{}}>
                CP
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    style={{ float: "right" }}
                    class="bi bi-file-earmark-code"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                    <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                  </svg>
                </span>
              </NavDropdown.Item>
              <NavDropdown.Item className="py-3" href="">
                Cloud
                <span>
                  <svg
                    style={{ float: "right" }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-cloud"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                  </svg>
                </span>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              onClick={() => document.getElementById("team").scrollIntoView()}
              className="fw-bolder text-light fs-5"
            >
              Team
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                document.getElementById("contactus").scrollIntoView()
              }
              className="fw-bolder text-light fs-5"
            >
              Contact us
            </Nav.Link>
            <Nav.Link href="" className="fw-bolder text-light fs-5 me-1">
              Coming soon
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link
              onClick={handleShow}
              className="me-md-2"
              style={{ textDecoration: "none" }}
            >
              <span
                className="fw-bolder text-light fs-5 "
                style={{ textDecoration: "none" }}
              >
                Login
              </span>
            </Nav.Link>

            <Nav.Link eventKey={2} className="fw-bolder" href="">
              <Button
                variant="alert"
                className="px-3 fs-5 fw-bolder"
                style={{
                  backgroundColor: "#ffb703",
                  marginTop: "-5px",
                  color: "#003d5b",
                }}
              >
                Sign up
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal className="loginModal" centered show={show} onHide={handleClose}>
        <Modal.Header
          style={{
            backgroundColor: "#003d5b",
            color: "white",
          }}
          closeButton
        >
          Welcome back!
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#003d5b" }}>
          <Form>
            <Form.Label className="fs-5 fw-bolder text-light">Email</Form.Label>
            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Your email"
                className="emailNavBar"
              />
            </Form.Group>
            <Form.Label className="fs-5 fw-bolder text-light">
              Password
            </Form.Label>

            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Control
                type="password"
                placeholder="Your password"
                className="passwordNavBar"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer
          style={{
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#003d5b",
          }}
        >
          <Button
            style={{
              width: "100%",
              backgroundColor: "#ffb703",
              color: "#003d5b",
            }}
            variant="none"
            className="fw-bolder fs-6 my-2"
            type="submit"
          >
            Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              ight="16"
              fill="currentColor"
              style={{ marginLeft: "3px" }}
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </Button>
          <Button
            style={{ width: "100%", border: "1px solid #ffb703" }}
            variant="none"
            className="fw-bolder fs-6 mb-2 text-light"
            type="submit"
          >
            Create an account instead
          </Button>
          <p
            className="text-light text-decoration-underline"
            style={{ fontSize: "12px" }}
          >
            Forgot your password?
          </p>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};
export default NavBar;
