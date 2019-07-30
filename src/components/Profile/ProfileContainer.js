import React from "react";
import { connect } from "react-redux";
import Profiles from "./Profiles";
import { withRouter ,Redirect  } from "react-router-dom";
import { profile } from "store/profile/selectors";
import { getUserProfile } from "store/profile/thunk";
import { userAuth } from "store/authorization/selectors";

class ProfileContainer extends React.Component {
  constructor(props) {
    super(props);

    this.user = {
      id: this.props.match.params.userId
    };
  }

  componentDidMount() {
    const userId = this.user.id;
    this.props.getUserProfile(userId);
  }

  render() {
    if(!this.props.isAuth) {
      debugger;
      return <Redirect to={"/login"} />
    }
    return <Profiles profile={this.props.profile} />;
  }
}

const mapStateToProps = store => {
  return {
    profile: profile(store),
    isAuth: userAuth(store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserProfile: userId => {
      dispatch(getUserProfile(userId));
    }
  };
};

const withRouterData = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouterData);
