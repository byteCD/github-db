import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Error from "../../components/Error/Error";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="NotFound">
      <Container>
        <Row>
          <Col>
            <Error error="Страница не найдена" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
