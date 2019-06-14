import { ADD_POST, UPDATE_NEW_POST_TEXT, SET_USERS_PROFILE } from "./constants";

export const addPostActionCreat = () => {
  return {
    type: ADD_POST
  };
};

export const onPostChangeActionCreat = text => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

export const setUsersProfile = profile => {
  return {
    type: SET_USERS_PROFILE,
    profile
  };
};
