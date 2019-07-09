import React from "react";
import { connect } from "react-redux";
import { setUserProfile } from "store/profile/index";
import Profiles from "./Profiles";
import { withRouter } from "react-router-dom";
import { profilePage_profile } from "store/profile/selectors";
import DataAPI from "api/index";

class ProfileContainer extends React.Component {
  componentDidMount() {
    const userId = this.props.match.params.userId;

    DataAPI.getUsersId(userId).then(response => {
      this.props.setUserProfile(response);
    });
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
    setUserProfile: profile => {
      dispatch(setUserProfile(profile));
    }
  };
};

const withRouterData = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouterData);
