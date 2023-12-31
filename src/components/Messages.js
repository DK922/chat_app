import React, { Component } from "react";

class Messages extends Component {
  renderMessage(message) {
    const { member, text } = message;
    const { currentMember } = this.props;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "messages-message current-member"
      : "messages-message";
    return (
      <li className={className}>
        <span
          className="member-color"
          style={{ backgroundColor: member.clientData.color }}
        />
        <div className="message-text">
          <div className="username">{member.clientData.username}</div>
          <div className="text">{text}</div>
        </div>
      </li>
    );
  }

  render() {
    const { messages } = this.props;
    return (
      <ul className="messages-list">
        {messages.map((m) => this.renderMessage(m))}
      </ul>
    );
  }
}

export default Messages;
