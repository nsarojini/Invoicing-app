import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const history = useNavigate();

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            User Registration
          </NavLink>

          <Nav className="me-auto">
            <NavLink
              to="/"
              className="text-decoration-none text-light mx-4 mt-2 "
            >
              Home
            </NavLink>

            <Button class="btn btn-light" onClick={userlogout}>
              Sign Out
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
