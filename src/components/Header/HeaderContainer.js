import React from "react";
import classes from "./Header.module.css";
import { connect } from "react-redux";
import Header from "./Header";
import {
  authUser_first_name,
  authUser_userAuth
} from "store/authorization/selectors";
import { postRegister_getUser } from "store/authorization/thunk";

class HeaderContainer extends React.Component {
  componentDidMount() {
    let email = "eve.holt@reqres.in";
    let password = "pisfrfrfrfrftol111111";        
    this.props.postRegister_getUser(email, password);
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
  return {
    first_name: authUser_first_name(store),
    userAuth: authUser_userAuth(store)
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
