import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink to="/profile" activeClassName={classes.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/dialogs" activeClassName={classes.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/news" activeClassName={classes.activeLink}>
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/users" activeClassName={classes.activeLink}>
          Users
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to="/yandexMaps" activeClassName={classes.activeLink}>
          Map
        </NavLink>
        <div className={classes.item}>
          <NavLink to="/graphics" activeClassName={classes.activeLink}>
            Graphics
          </NavLink>
          <div>
            <NavLink to="/friends" activeClassName={classes.activeLink}>
              Friends
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
