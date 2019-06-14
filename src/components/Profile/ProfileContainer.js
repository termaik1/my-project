import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUsersProfile } from "../../store/profile/index";
import Profiles from "./Profiles";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    const userId = this.props.match.params.userId;

    axios.get(`https://reqres.in/api/users/` + userId).then(response => {
      this.props.setUsersProfile(response.data.data);
    });
  }

  render() {
    return <Profiles  profile={this.props.profile} />;
  }
}

const mapStateToProps = store => {
  return {
    profile: store.profilePage.profile
  };
};

const withRouterData = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  {
    setUsersProfile
  }
)(withRouterData);
