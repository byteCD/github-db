import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UserItem.css";

const UserItem = ({ user }) => {
  return (
    <div className="UserItem">
      <Link className="UserItem__link" to={`/user/${user.login}`}>
        <Card bg="dark">
          <Card.Img
            variant="top"
            src={user.avatar_url}
            alt={`Аватар пользователя ${user.login}`}
          />
          <Card.Body>
            <Card.Title>{user.login}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default UserItem;
