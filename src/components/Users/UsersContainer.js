import { connect } from "react-redux";
import { setUsers, setFetching } from "../../store/users/action";
import UsersAPI from "./UsersAPI";

const mapStateToProps = store => {
  return {
    users: store.usersPage.users,
    fetching: store.usersPage.fetching
  };
};

export default connect(
  mapStateToProps,
  {
    setUsers,
    setFetching
  }
)(UsersAPI);
