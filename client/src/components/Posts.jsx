import React, { Component } from "react";

import Post from "./Post";

class Posts extends Component {
  render() {
    const post = this.props.Posts;

    const posts = post.map(info => (
      <div className="col s6" key={info.Nombre}>
        <Post Nombre={info.Nombre} Post={info.Post}></Post>
      </div>
    ));
    return (
      <React.Fragment>
        <h2>Aqui van los posts</h2>
        <div>{posts}</div>
      </React.Fragment>
    );
  }
}

export default Posts;
