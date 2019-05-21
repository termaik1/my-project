import React from "react";
import classes from "./Dialogs.module.css";
import DialogsItem from "./DialogsModules/DialogsItem";
import Message from "./DialogsModules/Message";
import NewsMessagesText from "./DialogsModules/NewsMessagesText";
import {connect} from "react-redux"

const Dialogs = props => {
  const dialogsElement = props.dialogs.map(dialog => (
    <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id} />
  ));

  const messagesElement = props.messages.map(messag => (
    <Message key={messag.id} message={messag.message} id={messag.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElement}</div>
      <div>
        <div className={classes.messages}>{messagesElement}</div>
        <NewsMessagesText
          dispatch={props.dispatch}
          newMessagesText={props.newMessagesText}
        />
      </div>
    </div>
  );
};

const mapStateToProps = store => {
  return {
    dialogs: store.dialogsPage.dialogs,
    messages: store.dialogsPage.messages,
    newMessagesText: store.dialogsPage.newMessagesText
  };
};

export default connect(mapStateToProps)(Dialogs);
