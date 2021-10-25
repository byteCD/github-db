import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import SearchUsersForm from "../../components/SearchUsersForm/SearchUsersForm";
import "./Home.css";
import UsersList from "../../components/UsersList/UsersList";

const Home = () => {
  return (
    <div className="Home">
      <Container>
        <Row>
          <Col>
            <SearchUsersForm />
            <UsersList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
