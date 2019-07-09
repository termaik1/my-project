import { SET_USERS, TRIGGER_FETCHING } from "./constants";

const initialState = {
  users: [],
  fetching: true
};

const usersReducers = {
  [SET_USERS]: (state, action) => {
    return { ...state, users: [...state.users, ...action.users] };
  },
  [TRIGGER_FETCHING]: (state, action) => {
    return { ...state, fetching: action.fetching };
  }
};

const usersPage = (state = initialState, action) => {
  const reducers = usersReducers[action.type];
  if (!reducers) {
    return state;
  }
  return reducers(state, action);
};

export default usersPage;
