import React from "react";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import Header from "./Header";
import {
  firstName,
  userAuth
} from "store/authorization/selectors";
import { postRegister_getUser } from "store/authorization/thunk";

class HeaderContainer extends React.Component {
  componentDidMount() {
    let email = "eve.holt@reqres.in1";
    let password = "pisfrfrfrfrftol111111";        
    this.props.postRegister_getUser(email, password);
  }
  render() {
    return (
      <Header
        firstName={this.props.firstName}
        userAuth={this.props.userAuth}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    firstName: firstName(store),
    userAuth: userAuth(store)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    postRegister_getUser: (email, password) => {
      dispatch(postRegister_getUser(email, password));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer);
