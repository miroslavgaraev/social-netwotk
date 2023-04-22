import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/149452.png";
import {useDispatch} from "react-redux";
import {set_UserId} from "../../redux/Actions/MessagesAction";
import {follow, unfollow} from "../../redux/Reducer/MessagesReducers";

const MessageItem = (props) => {
  const { ...user } = props;
  const dispatch = useDispatch()
  const changeFollowingProgress = (user) => {
    if (!user.followed) {
      dispatch(follow(user.id))
    } else {
      dispatch(unfollow(user.id))
    }
  };
  const setUserId = (userId) => {
    dispatch(set_UserId(userId))
  }
  return (
    <div className={"item"}>
      <div>
        <NavLink onClick={() => {setUserId(user.id)}} to={`/profile/${user.id}`}>
          <img
            src={user.photos.small != null ? user.photos.small : userPhoto}
            width={"100"}
          />
        </NavLink>
      </div>
      <div>
        <button
          className={"follow"}
          onClick={() => {
            changeFollowingProgress(user);
          }}
        >
          {user.followed ? "Отписаться" : "Подписаться"}
        </button>
      </div>
      <div>
        <div>
          <p className={"name"}>{user.name}</p>
        </div>
        <div>
          <p></p>
        </div>
        <div>
          <p className={"status"}>{user.status}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;