import React from "react";
import classes from "./Message.module.css";

const Message = ({message}) => {
 
  return <div className={classes.dialog}>{message}</div>;
};

export default Message;

