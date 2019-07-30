import React from "react";
import classes from "./Profiles.module.css";
import MyPostsContainer from "module/Profiles/MyPosts";
import ProfileInfo from "module/Profiles/ProfileInfo";


const Profile = ({profile}) => {
  
  return (
    <div>
      <ProfileInfo profile={profile}/>

      <MyPostsContainer  />
    </div>
  );
};

export default Profile;
