import { followUsers, getUsers, unFollowUsers } from "../api/api";
import { updateObjectInArray } from "../utils/objects-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followinginProgress: [],
};

const usersReducer = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        /*users:updateObjectInArray(state.users, action.userID, "Id", {followed: true} ) ЭТОТ РЕФАКТОРИНГ НЕ РАБОТАЕТ*/
       
       
        users: state.users.map(u => {
          if (u.id == action.userID) {
            return { ...u, followed: true }
          }
          return u;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
       /* users:updateObjectInArray(state.users, action.userID, "Id", {followed: false} ) ЭТОТ РЕФАКТОРИНГ НЕ РАБОТАЕТ*/

        users: state.users.map(u => {
          if (u.id == action.userID) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.count }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followinginProgress: action.isFetching
          ? [...state.followinginProgress, action.userId]
          : state.followinginProgress.filter(id => id != action.userId)
      }
    }

    default:
      return state;

  }
}


export const followSucces = (userID) => ({ type: FOLLOW, userID });
export const unfollowSucces = (userID) => ({ type: UNFOLLOW, userID });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowinginProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });


export const getUsersThunkCreator = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));

    let data = await getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  }
}



export const follow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowinginProgress(true, userId));
   let data= await unFollowUsers(userId);

        if (data.resultCode === 0) {
          dispatch(followSucces(userId));
        }
        dispatch(toggleFollowinginProgress(false, userId));
  }
}

export const unfollow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowinginProgress(true, userId));
    let data= await followUsers(userId);

        if (data.resultCode === 0) {
          dispatch(unfollowSucces(userId));
        }
        dispatch(toggleFollowinginProgress(false, userId));
  }
}

export default usersReducer