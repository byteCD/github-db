import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./SearchUsersForm.css";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, setUsersError } from "../../redux/actions/userActions";
import { setQuery } from "../../redux/actions/queryActions";
import Error from "../Error/Error";

const SearchUsersForm = () => {
  const query = useSelector((state) => state.queryReducer.query);
  const usersError = useSelector((state) => state.userReducer.usersError);
  const [username, setUsername] = useState(query.username);

  const dispatch = useDispatch();

  const searchUser = () => {
    if (!username.trim()) {
      dispatch(setUsersError("Введите имя пользователя"));
      return;
    }

    dispatch(setUsersError(""));
    dispatch(setQuery({ currentPage: 1 }));
    dispatch(getUsers(username, 1));
  };

  useEffect(() => {
    dispatch(setQuery({ username }));
  }, [username]);

  return (
    <div className="SearchUsersForm">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          searchUser();
        }}
      >
        <span className="SearchUsersForm__title">Поиск</span>
        <Form.Group className="SearchUsersForm__group">
          <Form.Control
            className="SearchUsersForm__control"
            type="text"
            placeholder="Введите имя пользователя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            className="SearchUsersForm__btn"
            variant="dark"
            onClick={searchUser}
          >
            Поиск
          </Button>
        </Form.Group>
      </Form>
      {usersError && <Error error={usersError} />}
    </div>
  );
};

export default SearchUsersForm;
