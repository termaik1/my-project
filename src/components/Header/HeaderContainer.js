import React from "react";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import Header from "./Header";
import {
  authUser_first_name,
  authUser_userAuth
} from "store/authorization/selectors";
import { setUserDataAuth } from "store/authorization/action";
import DataAPI from "api/index";

class HeaderContainer extends React.Component {
  componentDidMount() {
    //debugger;
    let email = "eve.holt@reqres.in";
    let password = "pisfrfrfrfrftol111111";
    DataAPI.postRegisterId(email, password).then(responseId => {
      const userId = responseId;
      DataAPI.getUsersId(userId).then(response => {
        const { id, email, first_name, last_name, avatar } = response;
        this.props.setUserDataAuth(id, email, first_name, last_name, avatar);
      });
    });
  }
  render() {
    return (
      <Header
        first_name={this.props.first_name}
        userAuth={this.props.userAuth}
      />
    );
  }
}

const mapStateToProps = store => {
//  debugger;
  return {
    first_name: authUser_first_name(store),
    userAuth: authUser_userAuth(store)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setUserDataAuth: (id, email, first_name, last_name, avatar) => {
      dispatch(setUserDataAuth(id, email, first_name, last_name, avatar));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
