import React from "react";
import axios from "axios";
import Users from "./Users";
import SpinnerLoader from "common/spinnerLoader/index";
import DataAPI from "api/index";



{
  /*https://reqres.in/api/users*/
}
class UsersAPI extends React.Component {
  componentDidMount() {
 
    this.props.setFetching(true);
    DataAPI.getUsers().then(response => {
    
      this.props.setUsers(response);
      this.props.setFetching(false);
    });
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

export default UsersAPI;
