import Profile from "../Profile";
import { connect } from "react-redux";

const mapStateToProps = store => {
  debugger;
    return {
      
    posts: store.profilePage.posts,
    newPostText: store.profilePage.newPostText
  };
};

export default connect(mapStateToProps)(Profile);
