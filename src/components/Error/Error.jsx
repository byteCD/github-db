import React from "react";
import { Alert } from "react-bootstrap";
import "./Error.css";

const Error = ({ error }) => {
  return (
    <div className="Error">
      <Alert variant="danger">
        <h4>{error}</h4>
      </Alert>
    </div>
  );
};

export default Error;
