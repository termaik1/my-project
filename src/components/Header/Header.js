import React from "react";
import IMG from "./../../assets/img/spicialAngle.png"

import classes from "./Header.module.css";

const Header = () => {
return(
    <header className={classes.header}>
        <img src={IMG} />
      </header>
);
}

export default Header