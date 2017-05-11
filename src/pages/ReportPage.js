import React from 'react';
import { Link } from 'react-router-dom';
import GarmentData from '../static/data/garment_data.json';
import './ReportPage.scss';

class ReportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      garment: this.getGarmentInfo(),
    };
  }

  getGarmentInfo() {
    let garment_id = this.props.location.pathname.match(/^\/report\/(.*)/)[1];
    for (let i = 0; i < GarmentData.length; i++) {
      let garment = GarmentData[i];
      for (let j = 0; j < GarmentData[i].instances.length; j++) {
        let instance = GarmentData[i].instances[j];
        if (instance.id === garment_id) {
          return {
            id: instance.id,
            name: garment.name,
            model: garment.model,
            img: garment.img,
            size: instance.size,
          };
        }
      }
    }
  }

  render() {
    console.log(this.state.garment);
    return (
      <div className="ReportPage">
        <div className="back">
          <Link to="/inventory">Go Back</Link>
        </div>
        <div className="report-garment">
          <div className="garment-info">
            <div className="columns">
              <div className="left">
                <div className="icon">
                  <img
                    src={require('../img/white/' + this.state.garment.img.src)}
                    alt=""
                  />
                </div>
              </div>
              <div className="right">
                <div className="name">Name: {this.state.garment.name}</div>
                <div className="model">Model: {this.state.garment.model}</div>
                <div className="id">ID: {this.state.garment.id}</div>
                <div className="size">Size: {this.state.garment.size}</div>

              </div>
            </div>
          </div>
          <div className="title">1/3 Take picture of the damage</div>
          <div className="picture-container">
            <div className="picture" />
          </div>
        </div>
      </div>
    );
  }
}

export default ReportPage;
