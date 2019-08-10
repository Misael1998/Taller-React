import React, { Component } from "react";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre: "",
      Post: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    const { Nombre, Post } = this.state;
    e.preventDefault();
    if (Nombre !== "" && Post !== "") {
      console.log(this.state);
    } else {
      console.log("nada");
    }
  }

  render() {
    const { Nombre, Post } = this.state;
    return (
      <React.Fragment>
        <h2>Formulario para posts</h2>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  onChange={this.handleChange}
                  placeholder="Nombre"
                  id="textarea1"
                  name="Nombre"
                  value={Nombre}
                  className="materialize-textarea"
                ></textarea>
              </div>
              <div className="input-field col s12">
                <textarea
                  onChange={this.handleChange}
                  placeholder="Post"
                  id="textarea2"
                  name="Post"
                  className="materialize-textarea"
                ></textarea>
              </div>
            </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
              onClick={this.onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default PostForm;
