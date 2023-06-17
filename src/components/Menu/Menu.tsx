import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {
  CLASS_URL,
  COURSE_URL,
  HOME_URL,
  LECTURER_URL,
  SEMESTER_URL,
  STUDENT_URL,
  STUDENT_ENROLLMENT_URL,
  UPLOAD_DOCUMENT_URL,
  SEND_EMAIL_URL,
  SEMESTER_Details_URL,
} from "../../common/constant";
import Home from "../Home/home";
import Semester from "../Semester/Semester";
import SemesterDetails from "../Semester/component/SemesterDetails";

const Menu = () => {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">
          Student Grade Book
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={HOME_URL}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={SEMESTER_URL}>
              Semester
            </Nav.Link>
            <Nav.Link as={Link} to={COURSE_URL}>
              Course
            </Nav.Link>
            <Nav.Link as={Link} to={LECTURER_URL}>
              Lecturer
            </Nav.Link>
            <Nav.Link as={Link} to={CLASS_URL}>
              Class
            </Nav.Link>
            <Nav.Link as={Link} to={STUDENT_URL}>
              Student
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to={STUDENT_ENROLLMENT_URL}>
                Student Enrollment
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={UPLOAD_DOCUMENT_URL}>
                Upload Document
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to={SEND_EMAIL_URL}>
                Send Email
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path={HOME_URL} element={<Home />} />
        <Route path={SEMESTER_URL} element={<Semester />} />
        <Route path={COURSE_URL} element={<Home />} />
        <Route path={LECTURER_URL} element={<Home />} />
        <Route path={CLASS_URL} element={<Home />} />
        <Route path={STUDENT_URL} element={<Home />} />
        <Route path={STUDENT_ENROLLMENT_URL} element={<Home />} />
        <Route path={UPLOAD_DOCUMENT_URL} element={<Home />} />
        <Route path={SEND_EMAIL_URL} element={<Home />} />
        <Route path={SEMESTER_Details_URL} element={<SemesterDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Menu;
