import React from "react";
import classes from "./style/MyPosts.module.css";
import {
  onPostChangeActionCreat,
  addPostActionCreat
} from "./../../store/profile/action";

const AddNewPostText = props => {
  const newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreat());
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch(onPostChangeActionCreat(text));
  };

  return (
    <div>
      <textarea
        onChange={onPostChange}
        ref={newPostElement}
        placeholder={props.newPostText}
      />

      <button onClick={addPost}>Add post</button>
      <div className={classes.posts} />
    </div>
  );
};

export default AddNewPostText;
