const ADD_MESSAGES = "ADD_MESSAGES";
const UPDATE_NEW_MESSAGES_TEXT = "UPDATE_NEW_MESSAGEST_TEXT";

const init = {
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

const dialogsPage = (state = init, action) => {
  switch (action.type) {
    case ADD_MESSAGES: {
      let newMessages = {
        id: 6,
        message: state.newMessagesText
      };
      const stateCopy = { ...state };
      state.messages = [ ...state.messages ];
      stateCopy.messages.push(newMessages);
      stateCopy.newMessagesText = " ";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGES_TEXT: {
      const stateCopy = { ...state };
      stateCopy.newMessagesText = action.newText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export const addMessagesActionCreat = () => {
  return {
    type: ADD_MESSAGES
  };
};
export const onMessagesChangeActionCreat = text => {
  return {
    type: UPDATE_NEW_MESSAGES_TEXT,
    newText: text
  };
};

export default dialogsPage;
