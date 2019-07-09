import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./DialogsItem.module.css";
import Images from "assets/img/iconAva.png"

const DialogsItem = ({id,name}) => {
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={"/dialogs/" + id}>
        <img
          className={classes.userImg}
          src={Images}
        />
        <div>{name}</div>
      </NavLink>
    </div>
  );
};

export default DialogsItem;
