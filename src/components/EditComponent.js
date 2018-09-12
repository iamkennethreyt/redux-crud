import React, { Component } from "react";
import { connect } from "react-redux";

class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    };
    this.props.dispatch({ type: "UPDATE", id: this.props.post.id, data: data });
  };
  render() {
    return (
      <form onSubmit={this.handleEdit}>
        <div class="form-group">
          <label for="postTitle">Post Title</label>
          <input
            type="text"
            class="form-control"
            id="postTitle"
            ref={input => (this.getTitle = input)}
            defaultValue={this.props.post.title}
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
            defaultValue={this.props.post.message}
          />
        </div>
        <button type="submit" class="btn btn-secondary btn-lg btn-block">
          Update Post
        </button>
      </form>
    );
  }
}
export default connect()(EditComponent);
