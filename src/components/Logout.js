import React, { Component } from "react";

class Logout extends Component {
  handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      this.props.onLogout();
    }
  };

  render() {
    return (
      <div className="logout">
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

export default Logout;
