import DataAPI from "api/index";
import { setUserProfile } from "store/profile/action";

export const getUserProfile = userId => dispatch => {
  DataAPI.getUserId(userId).then(response => {
    dispatch(setUserProfile(response));
  });
};
