import React from "react";
import "./UsersPagination.css";
import { Pagination } from "react-bootstrap/";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/actions/userActions";
import { setQuery } from "../../redux/actions/queryActions";

const UsersPagination = () => {
  const dispatch = useDispatch();
  const usersFound = useSelector((state) => state.userReducer.usersFound);
  const username = useSelector((state) => state.queryReducer.query.username);
  const currentPage = useSelector(
    (state) => state.queryReducer.query.currentPage
  );
  const pages = [];
  const pagesCount =
    usersFound > 1000 ? Math.ceil(1000 / 60) : Math.ceil(usersFound / 60);

  for (let i = 0; i < pagesCount; i++) {
    pages.push(
      <Pagination.Item
        key={i}
        active={i + 1 === currentPage}
        onClick={() => {
          dispatch(getUsers(username, i + 1));
          dispatch(setQuery({ currentPage: i + 1 }));
        }}
      >
        {i + 1}
      </Pagination.Item>
    );
  }

  return (
    <div className="UsersPagination">
      <Pagination>{pages}</Pagination>
    </div>
  );
};

export default UsersPagination;
