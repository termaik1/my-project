import DataAPI from "api/index";
import { setUserDataAuth } from "store/authorization/action";

export const postRegister_getUser = (email, password) => dispatch => {
  DataAPI.postRegisterId(email, password).then(responseId => {
    const userId = responseId;
    DataAPI.getUserId(userId).then(response => {
      const { id, email, first_name, last_name, avatar } = response;
      dispatch(setUserDataAuth(id, email, first_name, last_name, avatar));
    });
  });
};
