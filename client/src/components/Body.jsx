import React, { Component } from "react";

import Posts from "./Posts";
import PostForm from "./PostForm";

class Body extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col s3 pink lighten-5">
            <PostForm></PostForm>
          </div>
          <div className="col s9 pink lighten-4">
            <Posts></Posts>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
