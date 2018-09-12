import React, { Component } from "react";
import { connect } from "react-redux";
class PostForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false
    };
    this.props.dispatch({
      type: "ADD_POST",
      data
    });
    this.getTitle.value = "";
    this.getMessage.value = "";
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          <label for="postTitle">Post Title</label>
          <input
            type="text"
            class="form-control"
            id="postTitle"
            ref={input => (this.getTitle = input)}
            placeholder="Enter Post Title"
          />
        </div>
        <div class="form-group">
          <label for="postBody">Post Body</label>
          <textarea
            required
            class="form-control"
            id="postBody"
            rows="3"
            placeholder="Enter Post"
            ref={input => (this.getMessage = input)}
          />
        </div>
        <button type="submit" class="btn btn-secondary btn-lg btn-block">
          Add Post
        </button>
      </form>
    );
  }
}
export default connect()(PostForm);
