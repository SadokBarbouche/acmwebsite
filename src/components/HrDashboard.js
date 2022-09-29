import React from "react";
import Logo from "../assets/ACM_WHITE_LOGO.png";
import { Button, Container, Form, Image, Navbar, Table } from "react-bootstrap";
import "../styles/styles.css";
import NavbarWhenConnected from "./NavbarWhenConnected";
const Memeber = (props) => {
  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.firstname}</td>
        <td>{props.lastname}</td>
        <td>@{props.username}</td>
        <td>{props.email}</td>
        <td>
          <Form.Select aria-label="Default select example">
            <option value="1">Verified</option>
            <option value="2">Pending</option>
          </Form.Select>
        </td>
        <td>
          <Form.Select aria-label="Default select example">
            <option value="1">Active</option>
            <option value="2">Inactive</option>
          </Form.Select>
        </td>
        <td>
          <p className="" style={{}}>
            {props.date}
          </p>
        </td>
      </tr>
    </>
  );
};
const HrDashboard = () => {
  return (
    <div
      id="dashboard"
      style={{ minHeight: "100vh", backgroundColor: "#003d5b" }}
    >
      <Container>
        <div className="text-center">
          <Image src={Logo} fluid style={{ height: "150px" }} />
        </div>
        <h1
          className="display-1 text-center mb-5 fw-bold text-light"
          style={{ marginTop: "-25px" }}
        >
          Dashboard
        </h1>
        <Table className="text-light" responsive="sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>

              <th>Is verified</th>
              <th>Activity Status</th>
              <th>Created at</th>

            </tr>
          </thead>
          <tbody>
            <Memeber
              id="1"
              firstname="Baha"
              lastname="Bouali"
              email="nahnouha@gmail.com"
              username="nahnouha"
              date="14/03/2001"
            />
            <Memeber
              id="2"
              firstname="Sadok"
              lastname="Barbouche"
              username="barbex"
              date="14/03/2001"
              email="bribesh1234@gmail.com"
            />
          </tbody>
        </Table>
        <div className="text-center">
          <Button
            className="px-4 fw-bolder fs-5 me-3"
            style={{
              backgroundColor: "#ffb703",
              color: "#003d5b",
              marginTop: "30px",
            }}
          >
            Save
            <svg
              style={{ marginLeft: "10px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-save"
              viewBox="0 0 16 16"
            >
              <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z" />
            </svg>
          </Button>
          <Button
            className="px-4 fw-bolder fs-5"
            style={{
              backgroundColor: "#01b1cd",
              color: "#003d5b",
              marginTop: "30px",
            }}
          >
            Undo
            <svg
              style={{ marginLeft: "10px", marginTop: "-3px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-counterclockwise"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
            </svg>
          </Button>
    </div>
      </Container>
    </div>
  );
};
export default HrDashboard;
