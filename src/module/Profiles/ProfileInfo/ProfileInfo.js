import React from "react";
import classes from "./ProfileInfo.module.css";
import Images from "assets/img/ava.jpg";
import SpinnerLoader from "common/spinnerLoader/index";

const ProfileInfo = ({ profile }) => {
 
  if (!profile) {
    return <SpinnerLoader />;
  }
  return (
    <div>
      <div className={classes.header}>
        <img src={profile.avatar} />
      </div>
      <div className={classes.BlockDescription} />
      <span>
        <div>First name: {profile.first_name}</div>
        <div>Last name: {profile.last_name}</div>
        <div>Email: {profile.email}</div>
      </span>
    </div>
  );
};

export default ProfileInfo;
