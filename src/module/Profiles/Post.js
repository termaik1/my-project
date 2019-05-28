import React from "react";
import classes from "./style/Post.module.css";
import PostLikesCount from "./PostLikesCount";
import Images from "./../../assets/img/goose-wallpapers.jpg"

const Post = props => {
  return (
    <div className={classes.item}>
      <div className={classes.prewive}>
        {props.messages} 
        <div>
          <PostLikesCount countsLike={props.likesCount} />
        </div>
      </div>
      <img src={Images} />
    </div>
  );
};

export default Post;
