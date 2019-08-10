import React, { Component } from "react";

class Post extends Component {
  render() {
    const { Nombre, Post } = this.props;
    return (
      <React.Fragment>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{Nombre}</span>
            <p>{Post}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Post;
