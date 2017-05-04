import React from 'react';
import GarmentInstance from './GarmentInstance';
import ArrowButton from './ArrowButton';
import { Link } from 'react-router-dom';

class Garment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      instances: this.props.instances,
    };
    this.expand = this.expand.bind(this);
  }

  expand() {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const expanded = this.state.expanded
      ? 'garment-list expanded'
      : 'garment-list';

    let toggle_message = 'Show all';
    if (this.state.expanded) {
      toggle_message = 'Minimize';
    }

    let garment_name_genitive = this.props.name;
    if (garment_name_genitive.slice(-1) !== 's') {
      garment_name_genitive += 's';
    } else {
      garment_name_genitive += "'";
    }

    let sizes = [];
    for (var index in this.state.instances) {
      if (!sizes.includes(this.state.instances[index].size)) {
        sizes.push(this.state.instances[index].size);
      }
    }
    let sizes_string = sizes.join(', ');

    return (
      <div className="Garment">
        <div className="stationary-info">
          <div className="name">{this.props.name}</div>

          <div className="columns">

            <div className="left">

              <div className="icon">
                <div className="top">
                  <img
                    src={require('../img/white/' + this.props.img.src)}
                    alt=""
                  />
                </div>
                <div className="middle" />
                <div className="bottom" />
              </div>
            </div>

            <div className="center">
              <div className="size">Sizes: {sizes_string}</div>
              <div className="amount">
                You have {this.state.instances.length}
              </div>
            </div>

            <div className="right">

              <div className="icon">

                <Link to="/store">
                  <img src={require('../img/red/store.svg')} alt="" />
                  <div className="text">Request more</div>
                </Link>

              </div>
            </div>
          </div>

          {!this.state.expanded &&
            <div className="showall">
              <div className="text">Show all</div>
              <ArrowButton
                direction="down"
                number={this.state.instances.length}
                functionality={this.expand}
                text={toggle_message + ' ' + garment_name_genitive}
              />
            </div>}

        </div>

        <div className={expanded}>

          {this.state.instances.map((instance, index) => (
            <GarmentInstance
              key={index}
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

        {this.state.expanded &&
          <div className="minimize">
            <ArrowButton
              direction="up"
              functionality={this.expand}
              text={toggle_message + ' ' + garment_name_genitive}
            />
            <div className="text">Minimize</div>
          </div>}

      </div>
    );
  }
}

export default Garment;
