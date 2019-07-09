import React from "react";
import classes from "./Graphics.module.css";

import axios from "axios";
class Graphics extends React.Component {
  sumbitHandler(e) {
    debugger;
    e.preventDefault();
    axios.post("https://reqres.in/api/register", {
      
    email: "eve.holt@reqres.in",
      password: "pistol"
  }).then(res => {
    debugger;
    res.data});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.sumbitHandler}>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
export default Graphics;
