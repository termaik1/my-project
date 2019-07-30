import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "module/Dialogs/DialogsItem";
import Message from "module/Dialogs/Message";
import NewsMessagesText from "module/Dialogs/NewsMessagesText";

import { Redirect} from "react-router-dom";
const Dialogs = ({ dialogs, messages, newMessagesText, dispatch, isAuth  }) => {
  const dialogsElement = dialogs.map(dialog => (
    <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  const messagesElement = messages.map(messag => (
    <Message key={messag.id} message={messag.message} id={messag.id} />
  ));
  if( !isAuth) {
    return <Redirect to={"/login"} />
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElement}</div>
      <div>
        <div className={classes.messages}>{messagesElement}</div>
        <NewsMessagesText
          dispatch={dispatch}
          newMessagesText={newMessagesText}
        />
      </div>
    </div>
  );
};

export default Dialogs;
