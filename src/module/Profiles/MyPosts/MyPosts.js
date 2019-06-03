import React from "react";
import classes from "./MyPosts.module.css";
import Post from "../Post/index";
import AddNewPostText from "../AddNewPostText/index";


const MyPosts = ({posts,newPostText,dispatch}) => {
  debugger;
  const postElemets = posts.map(posts => (
    <Post
      key={posts.id}
      messages={posts.message}
      likesCount={posts.likesCount}
    />
  ));

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostText
        dispatch={dispatch}
        newPostText={newPostText}
      />
      {postElemets}
    </div>
  );
};




export default MyPosts;
