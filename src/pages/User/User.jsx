import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getRepositories } from "../../redux/actions/repositoryActions";
import { getUser } from "../../redux/actions/userActions";
import "./User.css";
import Error from "../../components/Error/Error";
import UserInfo from "../../components/UserInfo/UserInfo";
import UserRepositories from "../../components/UserRepositories/UserRepositories";

const User = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const repositories = useSelector(
    (state) => state.repositoryReducer.repositories
  );
  const userLoaded = useSelector((state) => state.userReducer.userLoaded);
  const repositoriesLoaded = useSelector(
    (state) => state.repositoryReducer.repositoriesLoaded
  );
  const userError = useSelector((state) => state.userReducer.userError);

  useEffect(() => {
    dispatch(getUser(params.username));
    dispatch(getRepositories(params.username));
  }, []);

  return (
    userLoaded &&
    repositoriesLoaded && (
      <div className="User">
        <Container>
          <Row>
            {userError ? (
              <Error error={userError} />
            ) : (
              <>
                <Col xl="3">
                  <UserInfo user={user} />
                </Col>
                <Col>
                  <UserRepositories repositories={repositories} />
                </Col>
              </>
            )}
          </Row>
        </Container>
      </div>
    )
  );
};

export default User;
