import { ADD_MESSAGES, UPDATE_NEW_MESSAGES_TEXT } from "./constants";

const initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" }
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your " },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" }
  ],
  newMessagesText: "поле ввода"
};

const dialogsReducers = {
  [ADD_MESSAGES]: (state, action) => {
    let newMessages = {
      id: 6,
      message: state.newMessagesText
    };
    const stateCopy = { ...state };
    state.messages = [...state.messages];
    stateCopy.messages.push(newMessages);
    stateCopy.newMessagesText = " ";
    return stateCopy;
  },
  [UPDATE_NEW_MESSAGES_TEXT]: (state, action) => {
    const stateCopy = { ...state };
    stateCopy.newMessagesText = action.newText;
    return stateCopy;
  }
};

const dialogsPage = (state = initialState, action) => {
  const reducers = dialogsReducers[action.type];
  if (!reducers) {
    return state;
  }
  return reducers(state, action);
};

export default dialogsPage;
