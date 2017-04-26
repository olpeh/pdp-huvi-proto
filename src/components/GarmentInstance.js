import React from 'react';

class GarmentInstance extends React.Component {
  render() {
    return (
      <div className="GarmentInstance">
        <div className="location"> Location: {this.props.location}</div>
        <div className="columns">

          <div className="left">
            <div className="icon" />
          </div>
          <div className="center">
            <div className="name">Name: {this.props.name}</div>
            <div className="model">Model: {this.props.model}</div>
            <div className="id">ID: {this.props.id}</div>
            <div className="size">Size: {this.props.size}</div>
          </div>

          <div className="right">
            <div className="icon" />
          </div>
        </div>
      </div>
    );
  }
}
export default GarmentInstance;
