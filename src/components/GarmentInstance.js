import React from 'react';

class GarmentInstance extends React.Component {
  render() {
    return (
      <div className="GarmentInstance">
        <div className="title"> {this.props.name} - {this.props.model}</div>
        <div className="id">ID: {this.props.id}</div>
        <div className="size">Size: {this.props.size}</div>
        <div className="location"> Location: {this.props.location}</div>
        <div className="buttons">
          <a>Report broken</a>
          <a>Return</a>
        </div>
      </div>
    );
  }
}
export default GarmentInstance;
