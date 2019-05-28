import { ADD_MESSAGES, UPDATE_NEW_MESSAGES_TEXT } from "./constants";

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
