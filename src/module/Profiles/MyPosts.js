import React from "react";
import classes from "./style/MyPosts.module.css";
import Post from "./Post";
import AddNewPostText from "./AddNewPostText";


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
