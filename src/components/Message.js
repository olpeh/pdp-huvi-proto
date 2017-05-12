import React from 'react';

class Message extends React.Component {
  render() {
    let now = new Date(this.props.timestamp);
    let hhmmss = now.toISOString().substr(11, 8);
    const classes = `message from-${this.props.owner}`;
    return (
      <div className={classes}>
        <span className="message-text">{this.props.text}</span>
        <span className="message-time">{hhmmss}</span>
        <span className="corner-triangle" />
      </div>
    );
  }
}

export default Message;
