import { SET_USER_DATA } from "./constants";

export const setUserDataAuth = (
  userId,
  email,
  first_name,
  last_name,
  avatar
) => ({
  type: SET_USER_DATA,
  data: { userId, email, first_name, last_name, avatar }
});
