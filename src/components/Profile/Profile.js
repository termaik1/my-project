import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "../../module/Profiles/MyPosts";
import ProfileInfo from "../../module/Profiles/ProfileInfo";

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
