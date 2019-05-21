import { createStore, combineReducers } from "redux";
import profilePage from "./Redusers/profilePage";
import dialogsPage from "./Redusers/dialogsPage";



const reducers = combineReducers({
  profilePage: profilePage,
  dialogsPage: dialogsPage,
  
});

const store = createStore(reducers);
window.store = store;

export default store;