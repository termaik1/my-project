import { FOLLOW, UNFOLLOW, SET_USERS } from "./constants";

const initialState = {
  users: []
};

{
  /*const usersPage = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
      };
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};*/
}

const usersReducers = {
  [SET_USERS]: (state, action) => {
    return { ...state, users: [...state.users, ...action.users] };
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
