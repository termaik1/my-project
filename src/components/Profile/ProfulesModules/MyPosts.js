import React from "react";
import classes from "./../StyleModules/MyPosts.module.css";
import Post from "./Post";
import AddNewPostText from "./AddNewPostText";
import { connect } from "react-redux";

const MyPosts = props => {
  debugger;
  const postElemets = props.posts.map(posts => (
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
        dispatch={props.dispatch}
        newPostText={props.newPostText}
      />
      {postElemets}
    </div>
  );
};
const mapStateToProps = store => {
  debugger;
  return {
    posts: store.profilePage.posts,
    newPostText: store.profilePage.newPostText,
  };
};



export default connect(mapStateToProps)(MyPosts);
