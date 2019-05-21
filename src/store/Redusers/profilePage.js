const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";

const init = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "Dada", likesCount: 11 }
  ],
  newPostText: "поле ввода"
};

const profilePage = (state = init, action) => {
  switch (action.type) {
    case ADD_POST: {
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
    }
    case UPDATE_NEW_POST_TEXT: {
      const stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    default: {
      return state;
    }
  }
};
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
export default profilePage;
