import React from 'react';
import GarmentInstance from './GarmentInstance';

class Garment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      instances: this.props.instances,
    };
  }

  expand() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const expanded = this.state.expanded
      ? 'garment-list expanded'
      : 'garment-list';
    return (
      <div className="Garment">
        <div className="stationary-info" onClick={() => this.expand()}>

          <div className="left">
            <img
              className="image"
              src={this.props.img.src}
              alt={this.props.img.alt}
            />
          </div>

          <div className="right">
            <div className="name">
              <strong>{this.props.name}</strong>
            </div>
            <div className="size">
              <strong>Model: </strong> {this.props.model}
            </div>

            <div className="detailed-information" />
          </div>
        </div>
        <div className={expanded}>
          {/*<div className="description">{this.props.description}</div>
          <div className="buttons">
            <a>Return</a>
            <a>Report repair</a>
          </div>
        </div>
      */}
          {this.state.instances.map(instance => (
            <GarmentInstance
              key={instance.id}
              name={this.props.name}
              model={this.props.model}
              img={this.props.img}
              id={instance.id}
              customer_number={instance.customer_number}
              size={instance.size}
              user_name={instance.user_name}
              location={instance.location}
            />
          ))}

        </div>

      </div>
    );
  }
}

export default Garment;
