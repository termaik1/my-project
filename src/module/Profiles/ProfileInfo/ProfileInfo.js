import React from "react";
import classes from "./ProfileInfo.module.css";
import Images from "./../../../assets/img/ava.jpg"

const ProfileInfo = () => {
  return (
    <div>
      <div className={classes.header}>
        <img src={Images} />
      </div>
      <div className={classes.BlockDescription}>
       ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
