import React, { useState } from "react";
import "./UserRepositories.css";
import { Col, Tab, Tabs } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { getRepository } from "../../redux/actions/repositoryActions";
import UserRepository from "../UserRepository/UserRepository";

const UserRepositories = ({ repositories }) => {
  const dispatch = useDispatch();
  const repository = useSelector((state) => state.repositoryReducer.repository);
  const [key, setKey] = useState("repositories");
  const [showRepository, setShowRepository] = useState(false);
  const repositoryLoaded = useSelector(
    (state) => state.repositoryReducer.repositoryLoaded
  );

  const showRepositoryInfo = (username, repositoryName) => {
    dispatch(getRepository(username, repositoryName));
    setShowRepository(true);
    setKey("repository");
  };

  return (
    <div className="UserRepositories">
      <Tabs activeKey={key} onSelect={(key) => setKey(key)}>
        <Tab title="Репозитории" eventKey="repositories">
          <Col className="UserRepositories__repositories">
            {repositories?.map((repository) => (
              <h5
                key={repository.id}
                onClick={() =>
                  showRepositoryInfo(repository.owner.login, repository.name)
                }
              >
                {repository.name}
              </h5>
            ))}
          </Col>
        </Tab>
        {showRepository && repositoryLoaded && (
          <Tab title={repository.name} eventKey="repository">
            <UserRepository repository={repository} />
          </Tab>
        )}
      </Tabs>
    </div>
  );
};

export default UserRepositories;
