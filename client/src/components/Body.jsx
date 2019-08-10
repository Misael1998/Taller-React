import React, { Component } from "react";

import Posts from "./Posts";
import PostForm from "./PostForm";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      Posts: [
        { Nombre: "Juan", Post: "perez" },
        { Nombre: "Pedro", Post: "solapo" },
        { Nombre: "Mario", Post: "antunez" },
        { Nombre: "Carlos", Post: "silmido" }
      ]
    };

    this.handlePost = this.handlePost.bind(this);
  }

  handlePost(e) {
    let newPosts = this.state.Posts;
    newPosts.unshift(e);
    this.setState({ Posts: newPosts });
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col s3 pink lighten-5">
            <PostForm handlePost={this.handlePost}></PostForm>
          </div>
          <div className="col s9 pink lighten-4">
            <Posts Posts={this.state.Posts}></Posts>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Body;
