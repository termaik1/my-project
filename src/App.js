import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import classes from "./App.module.css";
import HeaderContainer from "./components/Header/index";
import Navbar from "./components/Navbar/index";
import ProfileContainer from "./components/Profile/index";
import DialogsContainer from "./components/Dialogs/index";
import News from "./components/News/index";
import YandexMaps from "./components/YandexMaps/index";
import Graphics from "./components/Graphics/index";
import Friends from "./components/Friends/index";
import UsersContainer from "./components/Users/index";

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
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
