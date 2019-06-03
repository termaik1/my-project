import { connect } from "react-redux";
import { followAC, setUsersAC,unfollowAC } from "../../store/users/action";
import Users from "./Users";

const mapStateToProps = store => {
  
  return {
    users: store.usersPage.users
  };
};

const mapDispatchToProps = dispatch => {
  
  return {
    follow: usersId => {
      dispatch(followAC(usersId));
    },
    unfollow: usersId => {
      dispatch(unfollowAC(usersId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
