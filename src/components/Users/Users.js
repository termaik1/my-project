import React from "react";
import classes from "./users.module.css";
import { NavLink } from "react-router-dom";

import Images from "./../../assets/img/iconAva.png";

{
  /*https://reqres.in/api/users*/
}
const Users = ({users}) => {
  return (
    <div>
      {users.map(users => (
        <div key={users.id}>
          <span>
            <div>
            <NavLink to={'/profile/' + users.id}>
              <img className={classes.userImg} src={users.avatar} />
            </NavLink>
              
            </div>
          </span>
          <span>
            <span>
              <div>First name: {users.first_name}</div>
              <div>Last name: {users.last_name}</div>
            </span>
            <span />
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;