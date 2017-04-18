import React from 'react';

class Garment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  expand() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const expanded = this.state.expanded
      ? 'expanding-info expanded'
      : 'expanding-info';
    return (
      <div className="Garment" onClick={() => this.expand()}>
        <div className="stationary-info">

          <div className="left">
            <img
              className="image"
              src={this.props.img.src}
              alt={this.props.img.alt}
            />
          </div>

          <div className="right">
            <div className="name">
              <strong>{this.props.name} {this.props.model}</strong>
            </div>
            <div className="size"><strong>Size:</strong> {this.props.size}</div>

            <div className="detailed-information">
              <div className="customer-number">
                <strong>Customer number:</strong>
                {' '}
                {this.props.information.customer_number}
              </div>
              <div className="id">
                <strong>Garment ID:</strong> {this.props.information.id}
              </div>
            </div>
          </div>
        </div>
        <div className={expanded}>
          <div className="description">{this.props.description}</div>
          <div className="buttons">
            <a>Return</a>
            <a>Report repair</a>
          </div>
        </div>

      </div>
    );
  }
}

export default Garment;
