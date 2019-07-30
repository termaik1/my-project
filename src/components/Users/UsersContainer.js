import React from "react";
import Users from "./Users";
import SpinnerLoader from "common/spinnerLoader";
import DataAPI from "api/index";
import { connect } from "react-redux";
import { setFetching } from "store/users/action";
import { getUsers } from "store/users/thunk";

{
  /*https://reqres.in/api/users*/
}
class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <>
        {this.props.fetching ? <SpinnerLoader /> : null}
        <Users users={this.props.users} />;
      </>
    );
  }
}

const mapStateToProps = store => {
  return {
    users: store.usersPage.users,
    fetching: store.usersPage.fetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    setFetching: fetching => {
      dispatch(setFetching(fetching));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
