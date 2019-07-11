import React from "react";
import { connect } from "react-redux";
import Profiles from "./Profiles";
import { withRouter } from "react-router-dom";
import { profilePage_profile } from "store/profile/selectors";
import { getUserProfile } from "store/profile/thunk";

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
    return <Profiles profile={this.props.profile} />;
  }
}

const mapStateToProps = store => {
  return {
    profile: profilePage_profile(store)
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
