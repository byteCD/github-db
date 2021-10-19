import React from "react";
import "./UserInfo.css";
import { Col, Image } from "react-bootstrap";

const UserInfo = ({ user }) => {
  return (
    <div className="UserInfo">
      <Col>
        <Image
          fluid
          src={user.avatar_url}
          alt={`Аватар пользователя ${user.login}`}
        />
      </Col>
      <Col className="UserInfo__info">
        {user.name && <h2>{user.name}</h2>}
        <h4>{user.login}</h4>
        {user.location && <h6>{user.location}</h6>}
        {user.bio && <h6>{user.bio}</h6>}
        <a href={user.html_url} target="_blank" rel="noreferrer">
          <h6>Смотреть профиль на GitHub</h6>
        </a>
      </Col>
    </div>
  );
};

export default UserInfo;
