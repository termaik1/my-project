import React from "react";
import classes from "./Graphics.module.css";

import axios from "axios";
class Graphics extends React.Component {
  sumbitHandler(e) {
    e.preventDefault();
    axios.post("http://localhost:3102/categories", {
      categories: 'jaja'
      
    }).then(res => res.data);
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
