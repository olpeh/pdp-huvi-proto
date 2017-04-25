import React from 'react';
import Garment from './Garment';

class GarmentList extends React.Component {
  render() {
    return (
      <div className="GarmentList">
        {this.props.garments.map((garment, index) => (
          <Garment
            key={index}
            name={garment.name}
            model={garment.model}
            description={garment.description}
            instances={garment.instances}
            img={garment.img}
          />
        ))}
      </div>
    );
  }
}

export default GarmentList;
