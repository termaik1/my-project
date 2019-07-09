import { createStore, combineReducers } from "redux";
import profilePage from "store/profile/index";
import dialogsPage from "store/dialogs/index";
import usersPage from "store/users/index";
import authUser from "store/authorization/index"

const reducers = combineReducers({
  profilePage,
  dialogsPage,
  usersPage,
  authUser
});

const store = createStore(reducers);
{window.store = store  /* я про это помню, просто с этим очень хорошо подсмотреть что в нутри находиться */}

export default store;
