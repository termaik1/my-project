import React from "react";
import Images from "assets/img/spicialAngle.png";

import classes from "./Header.module.css";

import { NavLink } from "react-router-dom";

const Header = ({ firstName, userAuth }) => {
  return (
    <header className={classes.header}>
      <img src={Images} />

      <div className={classes.loginBlock}>
        {userAuth ? firstName : <NavLink to={"/login"}>login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
