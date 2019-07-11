import { ADD_POST, UPDATE_NEW_POST_TEXT, SET_USERS_PROFILE } from "./constants";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 }
  ],
  newPostText: "поле ввода",
  profile: null
};

const profileReducers = {
  [ADD_POST]: (state, action) => {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0
    };
    return { ...state, posts: [...state.posts, newPost], newPostText: " " };
  },
  [UPDATE_NEW_POST_TEXT]: (state, action) => {
    return { ...state, newPostText: action.newText };
  },
  [SET_USERS_PROFILE]: (state, action) => {
    return { ...state, profile: action.profile };
  }
};

const profilePage = (state = initialState, action) => {
  const reducers = profileReducers[action.type];
  if (!reducers) {
    return state;
  }
  return reducers(state, action);
};

export default profilePage;
