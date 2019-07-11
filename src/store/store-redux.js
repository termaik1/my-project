import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import profilePage from "store/profile/index";
import dialogsPage from "store/dialogs/index";
import usersPage from "store/users/index";
import authUser from "store/authorization/index";


const reducers = combineReducers({
  profilePage,
  dialogsPage,
  usersPage,
  authUser
});

const store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
{
  /*window.store = store;  я про это помню, просто с этим очень хорошо подсмотреть что в нутри находиться */
}

export default store;
