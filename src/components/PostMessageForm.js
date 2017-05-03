import React from 'react';
import './PostMessageForm.scss';

class PostMessageForm extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.appendChatMessage(this.messageInput.value);
    this.messageInput.value = '';
  }
  render() {
    return (
      <form className="PostMessageForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={message => this.messageInput = message}
          placeholder="Message"
        />
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default PostMessageForm;
