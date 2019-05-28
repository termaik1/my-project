import {ADD_POST,UPDATE_NEW_POST_TEXT} from  "./constants"


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
