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

    let toggle_message = "Show all";
    if (this.state.expanded) {
      toggle_message = "Minimize";
    }

    let garment_name_genitive = this.props.name;
    if (garment_name_genitive.slice(-1) !== "s") {
      garment_name_genitive += "s";
    } else {
      garment_name_genitive += "'";
    }

    return (
      <div className="Garment">
        <div className="stationary-info">
          <div className="name">{this.props.name}</div>


          <div className="columns">
                    
          <div className="left">
            <div className="icon" />
          </div>

          <div className="center">
            <div className="size">Size</div>
            <div className="amount">You have {this.state.instances.length}</div>
          </div>

          <div className="right">
            <div className="icon">
            </div>
          </div>


        
        </div>

        <div className="expand-toggle" onClick={() => this.expand()}>
        
        
        <div className="text">{toggle_message} {garment_name_genitive}</div>
        {!this.state.expanded && <div className="arrow-down"></div> }
        {this.state.expanded && <div className="arrow-up"></div> }
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
