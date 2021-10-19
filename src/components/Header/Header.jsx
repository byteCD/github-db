import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="Header" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link className="Header__logo" to="/">
            GitHub DB
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
