import { getProfile, profileAPI } from "../api/api";


const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST='DELETE_POST';
const SAVE_PHOTO_SUCCEESS='SAVE_PHOTO_SUCCEESS'


let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 12 },
    { id: 2, message: "It's my first post", likeCount: 11 },
    { id: 3, message: "Blabla", likeCount: 13 },
    { id: 4, message: "Dada", likeCount: 14 },
  ],
  profile: null,
  status: "",
  
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likeCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };

    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case DELETE_POST:
      return {...state, posts: state.posts.filter(p=>p.id!=action.postId)}

      case SAVE_PHOTO_SUCCEESS:
      return {...state, profile: {...state.profile, photos: action.photos}}

    default:
      return state;

  }
}


export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type:DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type:SAVE_PHOTO_SUCCEESS, photos });




export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getProfile(userId);
      dispatch(setUserProfile(response.data));
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
      dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
}

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
      if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
      }
}





export default profileReducer