import React from "react";
import { Col } from "react-bootstrap";
import "./UserRepository.css";

const UserRepository = ({ repository }) => {
  return (
    <div className="UserRepository">
      <Col className="UserRepository__repository">
        <h5>
          <span>Название:</span> {repository.name}
        </h5>
        {repository.description && (
          <h5>
            <span>Описание:</span> {repository.description}
          </h5>
        )}
        {repository.language && (
          <h5>
            <span>Язык:</span> {repository.language}
          </h5>
        )}
        <h5>
          <span>Звезды:</span> {repository.stargazers_count}
        </h5>
        <h5>
          <a href={repository.html_url} target="_blank" rel="noreferrer">
            Смотреть репозиторий на GitHub
          </a>
        </h5>
      </Col>
    </div>
  );
};

export default UserRepository;
