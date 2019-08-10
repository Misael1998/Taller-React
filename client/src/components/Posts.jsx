import React, { Component } from "react";

import Post from "./Post";

class Posts extends Component {
  render() {
    const post = [
      { Nombre: "Juan", Post: "perez" },
      { Nombre: "Pedro", Post: "solapo" },
      { Nombre: "Mario", Post: "antunez" },
      { Nombre: "Carlos", Post: "silmido" }
    ];

    const posts = post.map(info => (
      <div className="col s6">
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
