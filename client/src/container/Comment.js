import React from "react";

class Comment extends React.Component {
  state = {
    response: "",
    post: "",
    responseToPost: "",
    postName: "",
    responseToPostName: ""
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        post: this.state.post,
        postName: this.state.postName
      })
    });
    console.log(response);
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  render() {
    return (
      <div id="comments">
        <h2>post borad </h2>
        <ul>
          <li>
            <article>
              <header>
                <figure className="avatar">
                  <img src="../images/demo/avatar.png" alt="" />
                </figure>
              </header>
              <div className="comcont">
                <p>{this.state.responseToPost}</p>
              </div>
            </article>
          </li>
        </ul>
        <h2>Write A post</h2>
        <form action="#" method="post" onSubmit={this.handleSubmit}>
          <div className="one_third first">
            <label for="name">
              Name <span>*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={this.state.postName}
              size="22"
              onChange={e => this.setState({ postName: e.target.value })}
              required
            />
          </div>
          <div className="block clear">
            <label for="comment">Your post</label>
            <textarea
              name="comment"
              id="comment"
              cols="25"
              rows="10"
              value={this.state.post}
              onChange={e => this.setState({ post: e.target.value })}
            />
          </div>
          <div>
            <input type="submit" name="submit" value="Submit Form" />
            &nbsp;
          </div>
        </form>
      </div>
    );
  }
}

export default Comment;
