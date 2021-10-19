import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserItem from "../UserItem/UserItem";
import { useSelector } from "react-redux";
import UsersPagination from "../UsersPagination/UsersPagination";
import Loader from "../Loader/Loader";

const UsersList = () => {
  const users = useSelector((state) => state.userReducer.users);
  const usersFound = useSelector((state) => state.userReducer.usersFound);
  const usersLoaded = useSelector((state) => state.userReducer.usersLoaded);

  return (
    <div className="UsersList">
      <Container>
        {!usersLoaded ? (
          <Loader />
        ) : (
          <Row lg="3" sm="2" xs="1">
            {users?.map((user) => (
              <Col key={user.id}>
                <UserItem user={user} />
              </Col>
            ))}
            {usersFound > 60 && <UsersPagination />}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default UsersList;
