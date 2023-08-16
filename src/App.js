import React, { Component } from "react";
import Messages from "./components/Messages";
import Input from "./components/Input";
import Login from "./components/Login";
import Logout from "./components/Logout";
import "./App.css";
import { generateRandomName } from "./helpers/RandomName";
import { generateRandomColor } from "./helpers/RandomColor";
import "./components/Messages.css";
import "./components/Input.css";

class App extends Component {
  state = {
    messages: [],
    member: {
      username: generateRandomName(),
      color: generateRandomColor(),
    },
    isLoggedIn: false,
  };

  constructor() {
    super();
    const channelID = "fuRs5cwlurHRdlV5";
    const secretKey = "P4uI8BeLqnezt7heXoyYlbUpf8YxdDnm";
    this.drone = new window.Scaledrone(channelID, {
      data: this.state.member,
      secretKey: secretKey,
    });

    this.drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });

    const room = this.drone.subscribe("observable-room");
    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message,
    });
  };

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div className="App">
        <h1>My Chat App</h1>
        {!this.state.isLoggedIn ? (
          <Login onLogin={this.handleLogin} />
        ) : (
          <>
            <Messages
              messages={this.state.messages}
              currentMember={this.state.member}
            />
            <Input onSendMessage={this.onSendMessage} />
            <Logout onLogout={this.handleLogout} /> {}
          </>
        )}
      </div>
    );
  }
}

export default App;
