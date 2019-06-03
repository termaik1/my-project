import { ADD_POST, UPDATE_NEW_POST_TEXT } from "./constants";

const initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 }
  ],
  newPostText: "поле ввода"
};

const profileReducers = {
  [ADD_POST]: (state, action) => {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0
    };
    const stateCopy = { ...state };
    stateCopy.posts = [...state.posts];
    stateCopy.posts.push(newPost);
    stateCopy.newPostText = " ";
    return stateCopy;
  },
  [UPDATE_NEW_POST_TEXT]: (state, action) => {
    const stateCopy = { ...state };
    stateCopy.newPostText = action.newText;
    return stateCopy;
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
