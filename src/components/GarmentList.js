import React from 'react';
import Garment from './Garment';

class GarmentList extends React.Component {
  render() {
    return (
      <div className="GarmentList">
        {this.props.garments.map(garment => (
          <Garment
            key={garment.information.id}
            name={garment.name}
            model={garment.model}
            size={garment.size}
            description={garment.description}
            information={garment.information}
            img={garment.img}
          />
        ))}
      </div>
    );
  }
}

export default GarmentList;
