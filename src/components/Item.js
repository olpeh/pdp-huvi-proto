import React from 'react';

class Item extends React.Component {
  render() {
    return (
      <div className="Item">

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
              <strong>{this.props.name}</strong>
            </div>

            <div className="model">
              <strong>Model: </strong><strong>{this.props.model}</strong>
            </div>

            <div className="size">
              <strong>Sizes: </strong>
              {this.props.sizes.map(function(size, index) {
                return <span key={index}>{!!index && ', '}{size}</span>;
              })}
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default Item;
