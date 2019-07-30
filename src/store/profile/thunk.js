import DataAPI from "api";
import { setUserProfile } from "store/profile/action";

export const getUserProfile = userId => dispatch => {
  DataAPI.getUserId(userId).then(response => {
    dispatch(setUserProfile(response));
  });
};
