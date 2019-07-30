import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import classes from "./App.module.css";
import HeaderContainer from "./components/Header";
import Navbar from "./components/Navbar";
import ProfileContainer from "./components/Profile";
import DialogsContainer from "./components/Dialogs";
import News from "./components/News";
import YandexMaps from "./components/YandexMaps";
import Graphics from "./components/Graphics";
import Friends from "./components/Friends";
import UsersContainer from "./components/Users";
import Login from "./components/login/login";

const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.appWrapper}>
        <HeaderContainer />
        <Navbar />
        <div className={classes.appWrapperContent}>
          {/* exact - возможно это придеться использовать для точного выбора url'а */}
          <Route path="/dialogs" component={DialogsContainer} />
          <Route path="/profile/:userId" component={ProfileContainer } />
          <Route path="/news" component={News} />
          <Route path="/users" component={UsersContainer} />
          <Route path="/yandexMaps" component={YandexMaps} />
          <Route path="/graphics" component={Graphics} />
          <Route path="/friends" component={Friends} />
          <Route path="/login" component={Login} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
