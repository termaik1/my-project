import DataAPI from "api";
import { setUsers, setFetching } from "store/users/action";

export const getUsers = () => dispatch => {
  dispatch(setFetching(true));
  DataAPI.getUsers().then(response => {
    dispatch(setFetching(false));
    dispatch(setUsers(response));
  });
};
