import React from "react";
import classes from "./Profiles.module.css";
import MyPostsContainer from "module/Profiles/MyPosts/index";
import ProfileInfo from "module/Profiles/ProfileInfo/index";


const Profile = ({profile}) => {
  
  return (
    <div>
      <ProfileInfo profile={profile}/>

      <MyPostsContainer  />
    </div>
  );
};

export default Profile;
