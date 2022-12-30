import { deleteFollowUser, postFollowUser } from "../../API/api";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/149452.png";
import {useDispatch} from "react-redux";
import {follow_user, unfollow_user} from "../../redux/Actions/MessagesAction";

const MessageItem = (props) => {
  const { ...user } = props;
  const dispatch = useDispatch()
  const changeFollowingProgress = (user) => {
    if (!user.followed) {
      postFollowUser(user.id).then((response) => {
        if (response.data.resultCode === 0) {
         dispatch(follow_user(user.id))
        }
      });
    } else {
      deleteFollowUser(user.id).then((response) => {
        if (response.data.resultCode === 0) {
          dispatch(unfollow_user(user.id))
        }
      });
    }
  };
  return (
    <div className={"item"}>
      <div>
        <NavLink to={`/profile/${user.id}`}>
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