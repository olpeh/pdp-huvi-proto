import React from 'react';
import './ChatBox.scss';
import MessageList from './MessageList';
import PostMessageForm from './PostMessageForm';

class ChatBox extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      messages: [{
      id: 0,
      timestamp: new Date().getTime(),
      owner: this.props.owner,
      text: 'Hi! How can we help you?',
    }],
    };

    this.appendChatMessage = this.appendChatMessage.bind(this);
    this.clearMessages = this.clearMessages.bind(this);
  }
  appendChatMessage(text) {
    const owner = 'Me';
    let newMessage = {
      id: this.state.messages.length + 1,
      timestamp: new Date().getTime(),
      owner: owner,
      text: text,
    };
    this.setState({ messages: [...this.state.messages, newMessage] });
  }
  clearMessages() {
    this.setState({ messages: [] });
  }
  render() {
    return (
      <div className="ChatBox">
        <h1 className="ChatBox-heading">{this.props.title}</h1>
        <div className="ChatBox-MessageList">
          <MessageList messages={this.state.messages} />
        </div>
        <div className="ChatBox-PostMessageForm">
          <PostMessageForm appendChatMessage={this.appendChatMessage} />
        </div>
      </div>
    );
  }
}

export default ChatBox;
