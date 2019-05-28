import React from "react";
import classes from "./../../module/Dialogs/style/Dialogs.module.css";
import DialogsItem from "../../module/Dialogs/DialogsItem";
import Message from "../../module/Dialogs/Message";
import NewsMessagesText from "../../module/Dialogs/NewsMessagesText";


const Dialogs = ({dialogs, messages, newMessagesText,dispatch}) => {
  const dialogsElement = dialogs.map(dialog => (
    <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  const messagesElement = messages.map(messag => (
    <Message key={messag.id} message={messag.message} id={messag.id} />
  ));

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
