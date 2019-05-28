import React from "react";
import {
  onMessagesChangeActionCreat,
  addMessagesActionCreat
} from "./../../store/dialogs/index";

const NewsMessagesText = ({dispatch,newMessagesText}) => {
  debugger;

  const newMessageElement = React.createRef();

  const addMessages = () => {
    dispatch(addMessagesActionCreat());
  };

  const onMessagesChange = () => {
    const text = newMessageElement.current.value;
    dispatch(onMessagesChangeActionCreat(text));
  };

  return (
    <div>
      <div>
        <textarea
          onChange={onMessagesChange}
          ref={newMessageElement}
          placeholder={newMessagesText}
        />
        <div>
          <button onClick={addMessages}>addMessages</button>
        </div>
      </div>
    </div>
  );
};

export default NewsMessagesText;
