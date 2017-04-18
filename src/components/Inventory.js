import React from 'react';
import GarmentList from './GarmentList';
import GarmentData from '../static/data/garment_data.json';


class Inventory extends React.Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			garments: GarmentData, 
		};
	}

	render() {
		return (
			<div className="Inventory">
				<GarmentList garments={this.state.garments} />
			</div>
		);
	}
}

export default Inventory;
