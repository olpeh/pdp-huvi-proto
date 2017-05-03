import React from 'react';
import './ArrowButton.scss';

class ArrowButton extends React.Component {
  render() {
    if (this.props.direction === 'down') {
      return (
        <div className="ArrowButton" onClick={this.props.functionality}>
          <div className="down">
            <div className="number">{this.props.number}</div>
          </div>
        </div>
      );
    } else if (this.props.direction === 'up') {
      return (
        <div className="ArrowButton" onClick={this.props.functionality}>
          <div className="up" />
        </div>
      );
    } else {
      return <div>Up or down</div>;
    }
  }
}

export default ArrowButton;
