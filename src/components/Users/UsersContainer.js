import { connect } from "react-redux";
import { setUsers, setFetching } from "store/users/action";
import UsersAPI from "./UsersAPI";

const mapStateToProps = store => {
  return {
    users: store.usersPage.users,
    fetching: store.usersPage.fetching
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: users => {
      dispatch(setUsers(users))
    },
    setFetching: fetching => {
      dispatch(setFetching(fetching))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersAPI);
