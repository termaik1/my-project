import { SET_USERS, TRIGGER_FETCHING } from "./constants";


export const setUsers = users => ({ type: SET_USERS, users });
export const setFetching = fetching => ({ type: TRIGGER_FETCHING, fetching });
