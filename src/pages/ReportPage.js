import React from 'react';
//import { Link } from 'react-router-dom';
import GarmentData from '../static/data/garment_data.json';
import './ReportPage.scss';

class ReportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      garment: this.getGarmentInfo(),
      picture: '',
    };
    this.addDescription = this.addDescription.bind(this);
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

  addDescription() {
    this.setState({ page: 2 });
  }

  render() {
    console.log(this.state.garment);

    return (
      <div className="ReportPage">
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
          {this.state.page === 1 &&
            <div className="picture-container">
              <div className="title">1/3 Take picture of the damage</div>
              <div className="picture" />
              <div className="buttons">
                <a onClick={this.addDescription}>Next</a>
              </div>
            </div>}

          {this.state.page === 2 &&
            <div className="description-container">

              <div className="title">2/3 Describe the damage</div>
              <div className="garment-picture">

                <div className="picture" />
                <div className="edit-picture">Edit</div>

              </div>

              <div className="description">
                <input type="text" />
              </div>

              <div className="buttons">
                <button>Cancel</button>
                <button>OK</button>
              </div>

            </div>}

          {this.state.page === 3 &&
            <div className="submit-container">
              <div className="title">3/3 Send the report</div>
              <div className="picture" />
              <div className="buttons">
                <button>Cancel</button>
              </div>
            </div>}
        </div>
      </div>
    );
  }
}

export default ReportPage;
