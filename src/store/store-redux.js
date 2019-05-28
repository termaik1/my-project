import { createStore, combineReducers } from "redux";
import profilePage from "./profile/index";
import dialogsPage from "./dialogs/index";
import usersPage from "./users/index";



const reducers = combineReducers({
  profilePage,
  dialogsPage,
  usersPage,
  
});

const store = createStore(reducers);


export default store;