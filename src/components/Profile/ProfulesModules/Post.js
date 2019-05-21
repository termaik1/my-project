import React from "react";
import classes from "./../StyleModules/Post.module.css";
import PostLikesCount from "./PostLikesCount";

const Post = props => {
  return (
    <div className={classes.item}>
      <div className={classes.prewive}>
        {props.messages} 
        <div>
          <PostLikesCount countsLike={props.likesCount} />
        </div>
      </div>
      <img src="https://stmed.net/sites/default/files/goose-wallpapers-25488-9500005.jpg" />
    </div>
  );
};

export default Post;
