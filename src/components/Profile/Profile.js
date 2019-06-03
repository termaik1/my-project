import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./../../module/Profiles/MyPosts/index";
import ProfileInfo from "./../../module/Profiles/ProfileInfo/index";

const Profile = ({posts,newPostText,dispatch}) => {
  debugger;
  return (
    <div>
      <ProfileInfo />

      <MyPosts posts={posts} newPostText={newPostText} dispatch={dispatch} />
    </div>
  );
};

export default Profile;
