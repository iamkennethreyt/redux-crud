import React, { Component } from "react";
import { connect } from "react-redux";

class Post extends Component {
  render() {
    return (
      <div className="card m-2">
        <div className="card-body">
          <h5 className="card-title">{this.props.post.title}</h5>
          <p className="card-text">{this.props.post.message}</p>
        </div>
        <div className="card-body">
          <a
            href="#"
            className="card-link"
            onClick={() =>
              this.props.dispatch({ type: "EDIT_POST", id: this.props.post.id })
            }
          >
            Update
          </a>
          <a
            href="#"
            className="card-link text-danger"
            onClick={() =>
              this.props.dispatch({
                type: "DELETE_POST",
                id: this.props.post.id
              })
            }
          >
            Delete
          </a>
        </div>
      </div>
    );
  }
}
export default connect()(Post);
