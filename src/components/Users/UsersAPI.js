import React from "react";
import axios from "axios";
import Users from "./Users";
import SpinnerLoader from "../../Common/spinnerLoader/index";


{
  /*https://reqres.in/api/users*/
}
class UsersAPI extends React.Component {
  componentDidMount() {
 
    this.props.setFetching(true);
    axios.get("https://reqres.in/api/users").then(response => {
         debugger;
      this.props.setUsers(response.data.data);
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
