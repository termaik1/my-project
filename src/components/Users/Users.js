import React from "react";
import classes from "./users.module.css";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios.get("https://reqres.in/api/users").then(response => {
      debugger;
      this.props.setUsers(response.data.data);
    });
  }

  render() {
    return (
      <div>
        {this.props.users.map(u => (
          <div key={u.id}>
            <span>
              <div>
                <img src={u.avatar} className={classes.userPhoto} />
              </div>
            </span>
            <span>
              <span>
                <div>First name: {u.first_name}</div>
                <div>Last name: {u.last_name}</div>
              </span>
              <span>
                <div>Email: {u.email}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
