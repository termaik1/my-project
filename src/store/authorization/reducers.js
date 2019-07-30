import { SET_USER_DATA } from "./constants";

const initialState = {
  userId: null,
  email: null,
  first_name: null,
  last_name: null,
  avatar: null,
  userAuth: false
};

const authReducers = {
  [SET_USER_DATA]: (state, action) => {
    return { ...state, ...action.data, userAuth: true };
  }
};

const authUsers = (state = initialState, action) => {
  const reducers = authReducers[action.type];
  if (!reducers) {
    return state;
  }
  return reducers(state, action);
};

export default authUsers;
