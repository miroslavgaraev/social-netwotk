import {
    FOLLOW,
    SET_CURRENT_PAGE, SET_USER_ID,
    SET_USERS,
    TOGGLE_IS_LOADING,
    TOTAL_USERS_COUNT,
    UNFOLLOW,
} from "../Constants/Constants";
import {currentPageSize, deleteFollowUser, postFollowUser} from "../../API/api";
import {follow_user, set_totalUsersCount, set_users, setIsLoading, unfollow_user} from "../Actions/MessagesAction";

let initialState = {
    users: [
        // {id: 1, followed:false, fullName:'Ivan', status:'I`m boss', location:{city:'Moscow', country:'Russia'}},
        // {id: 2, followed:true, fullName:'Anton', status:'I`m boss2', location:{city:'Minsk', country:'Russia'}},
        // {id: 3, followed:false, fullName:'Andrey', status:'I`m boss3', location:{city:'Bryansk', country:'Russia'}}
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    userId: null
};
let MessagesReducers = (state = initialState, action) => {
    let usersCopy = state.users;
    switch (action.type) {
        case FOLLOW:
            usersCopy = usersCopy.map((user, index) => {
                if (user.id === action.data) {
                    return {
                        ...user,
                        followed: true,
                    };
                }
                return user;
            });
            return {
                ...state,
                users: usersCopy,
            };
        case UNFOLLOW:
            usersCopy = usersCopy.map((user, index) => {
                if (user.id === action.data) {
                    return {
                        ...user,
                        followed: false,
                    };
                }
                return user;
            });
            return {
                ...state,
                users: usersCopy,
            };
        case SET_USERS:
            return {
                ...state,
                users: [...action.data],
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            };
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };
        case SET_USER_ID:
            return {
                ...state,
                userId: action.userId
            }
        default:
            return state;
    }
};

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        console.log(currentPage, 'messageReducer')
        dispatch(setIsLoading(true));
        currentPageSize(currentPage, pageSize).then((response) => {
            dispatch(set_users(response.data.items));
            dispatch(set_totalUsersCount(response.data.totalCount));
            dispatch(setIsLoading(false));
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {
        postFollowUser(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(follow_user(userId))
            }
        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        deleteFollowUser(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(unfollow_user(userId))
            }
        });
    }
}

export default MessagesReducers