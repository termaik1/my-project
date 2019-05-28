import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import classes from "./App.module.css";
import Header from "./components/Header/index";
import Navbar from "./components/Navbar/index";
import Profile from "./components/Profile/index";
import Dialogs from "./components/Dialogs/index";
import News from "./components/News/index";
import YandexMaps from "./components/YandexMaps/index";
import Graphics from "./components/Graphics/index";
import Friends from "./components/Friends/index";
import Users from "./components/Users/index";

const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.appWrapper}>
        <Header />
        <Navbar />
        <div className={classes.appWrapperContent}>
          {/* exact - возможно это придеться использовать для точного выбора url'а */}
          <Route path="/dialogs" render={() => <Dialogs />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/users" render={() => <Users />} />
          <Route path="/yandexMaps" render={() => <YandexMaps />} />
          <Route path="/graphics" render={() => <Graphics />} />
          <Route path="/friends" render={() => <Friends />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
