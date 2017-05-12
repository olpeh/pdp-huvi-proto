import React from 'react';
import { Link } from 'react-router-dom';

class Item extends React.Component {
  render() {
    return (
      <div className="Item">
        <div className="Item-name">{this.props.name}</div>
        <div className="columns">
          <div className="left">
            <div className="icon">
              <img src={require('../img/white/' + this.props.img.src)} alt="" />
            </div>
          </div>

          <div className="center">
            <div className="model">Model: {this.props.model}</div>
            <div className="price">Price: {this.props.price}€</div>
            <div className="description">{this.props.description}</div>
            <div className="sizes">
              Sizes:
              {' '}
              {this.props.sizes.map(function(size, index) {
                return <span key={index}>{!!index && ', '}{size}</span>;
              })}
            </div>

          </div>
          <div className="right">
            <div className="icon">
              <Link to="/store">
                <img src={require('../img/red/store.svg')} alt="" />
                <div className="text">Request</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
