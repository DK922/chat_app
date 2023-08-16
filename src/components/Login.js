import React, { Component } from "react";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: "",
  };

  handleUsernameChange = (e) => {
    this.setState({ username: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.state.username === "Algebra" &&
      this.state.password === "Algebra2023"
    ) {
      this.props.onLogin();
    } else {
      this.setState({
        error: "",
        username: "",
        password: "",
      });

      alert("Correct username: Algebra\nCorrect password: Algebra2023");
    }
  };

  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <br />
            <input
              type="text"
              id="username"
              value={this.state.username}
              onChange={this.handleUsernameChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              id="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              required
            />
          </div>
          <div>
            <br />
            <button type="submit">Log In</button>
          </div>
          {this.state.error && <div className="error">{this.state.error}</div>}
        </form>
      </div>
    );
  }
}

export default Login;
