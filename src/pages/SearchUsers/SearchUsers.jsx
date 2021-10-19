import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import SearchUsersForm from "../../components/SearchUsersForm/SearchUsersForm";
import "./SearchUsers.css";
import UsersList from "../../components/UsersList/UsersList";

const SearchUsers = () => {
  return (
    <div className="SearchUsers">
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

export default SearchUsers;
