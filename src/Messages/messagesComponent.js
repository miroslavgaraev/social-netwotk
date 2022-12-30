import "./messages.css";

import {
  set_currentPage,
  set_totalUsersCount,
  set_users,
  setIsLoading,
} from "../redux/Actions/MessagesAction";
import { useDispatch, useSelector } from "react-redux";
import * as axios from "axios";
import Loader from "../loader/loader";
import MessageItem from "./MessageItem/MessageItem";
import { useNavigate } from "react-router-dom";
import {currentPageSize, usersPage} from "../API/api";

function Messages() {
  const dispatch = useDispatch();
  const { users, pageSize, totalUsersCount, currentPage, isLoading } =
    useSelector((state) => state.MessageReducer);
  const { isAuth } = useSelector((state) => state.AuthReducer);
  if (users.length === 0) {
    dispatch(setIsLoading(true));
      currentPageSize(currentPage, pageSize).then((response) => {
        dispatch(set_users(response.data.items));
        dispatch(set_totalUsersCount(response.data.totalCount));
        dispatch(setIsLoading(false));
      });
  }
  let pages = Math.ceil(totalUsersCount / pageSize);
  let pagesCount = [];
  for (let i = 1; i <= pages; i++) {
    pagesCount.push(i);
  }

  const usersRequest = (page) => {
    dispatch(set_currentPage(page));
    dispatch(setIsLoading(true));
    usersPage(page, pageSize).then((response) => {
        dispatch(set_users(response.data.items));
        dispatch(setIsLoading(false));
      });
  };
  const navigate = useNavigate();
  if(isAuth === false) return navigate('/login')
  return (
    <>
      {isLoading ? <Loader /> : null}
      <div className={"dialogs"}>
        <div className={"dialogItems"}>
          {users.map((user) => {
            return <MessageItem {...user} />;
          })}
        </div>
        <div className={"switchPages"}>
          {pagesCount
            .slice(
              currentPage === 1 ? currentPage - 1 : currentPage - 2,
              currentPage + 1
            )
            .map((page) => {
              if (page === currentPage) {
                return (
                  <button
                    className={"activePage pageButton"}
                    onClick={() => {
                      usersRequest(page);
                    }}
                  >
                    <span>{page}</span>
                  </button>
                );
              }
              return (
                <button
                  className={"pageButton"}
                  onClick={() => {
                    usersRequest(page);
                  }}
                >
                  <span>{page}</span>
                </button>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Messages;
