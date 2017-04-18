import React from 'react';

class ReportForm extends React.Component {
  constructor(props) {
    super(props);
    this.garmentID = props.garmentID;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.appendChatMessage(this.nameInput.value, this.messageInput.value);
    this.messageInput.value = '';
  }

  render() {
    return (
      <div>
        <p>GarmentID: {this.garmentID}</p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Additional information:
            <textarea
              ref={message => this.messageInput = message}
              placeholder="Tell us what's broken"
              rows="6"
              cols="30"
            />
          </label>
          <input type="submit" value="Send" />
        </form>
      </div>
    );
  }
}

export default ReportForm;
