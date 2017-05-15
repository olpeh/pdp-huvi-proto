import React from 'react';
import { Link } from 'react-router-dom';
import GarmentData from '../static/data/garment_data.json';
import './ReportPage.scss';

class ReportPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      garment: this.getGarmentInfo(),
      complaint: '',
    };
    this.takePicture = this.takePicture.bind(this);
    this.addDescription = this.addDescription.bind(this);
    this.submitDescription = this.submitDescription.bind(this);
    this.submitReport = this.submitReport.bind(this);

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
  takePicture() {
  	this.setState({ page: 1 });
  }

  addDescription() {
    this.setState({ page: 2, complaint: "" });
  }

  submitDescription() {
  	this.setState({ page: 3, complaint: this.refs.complaint.value });	
  }

  submitReport() {
  	this.setState({ page: 4});
  }




  render() {
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
                <div className="name">{this.state.garment.name}</div>
                <div className="model">Model: {this.state.garment.model}</div>
                <div className="id">ID: {this.state.garment.id}</div>
                <div className="size">Size: {this.state.garment.size}</div>
              </div>
            </div>
          </div>
          {this.state.page === 1 &&
            <div className="picture-container">
              <div className="title">1/3 TAKE PICTURE OF THE DAMAGE</div>
              
              <div className="picture">
              	<img src={require("../img/camera.png")} alt=""/>
              </div>
              
              <div className="buttons">
                <Link className="cancel" to="/inventory">CANCEL</Link>
                <a className="next" onClick={this.addDescription}>NEXT</a>
              </div>
            </div>}

          {this.state.page === 2 &&
            <div className="description-container">

              <div className="garment-picture">

                <div className="picture">
                	<img src={require("../img/camera.png")} alt=""/>
                </div>
                <a onClick={this.takePicture} className="edit-picture">Edit</a>

              </div>
              <div className="title">2/3 DESCRIBE THE DAMAGE</div>

              <div className="description">
                <textarea ref="complaint" className="text"/>
              </div>

              <div className="buttons">
                <Link className="cancel" to="/inventory">CANCEL</Link>
                <a className="next" onClick={this.submitDescription}>OK</a>
              </div>

            </div>}

          {this.state.page === 3 &&
            <div className="submit-container">
              <div className="garment-picture">

                <div className="picture">
                	<img src={require("../img/camera.png")} alt=""/>
                </div>
                <a onClick={this.takePicture} className="edit-picture">Edit</a>

              </div>
              <div className="complaint">
              	<div className="complaint-description">
              		<div className="complaint-label">Damage description:</div>
              		<div className="complaint-text">{this.state.complaint}</div>
              	</div>
              	<a onClick={this.addDescription}>Edit</a>

              </div>
              
              <div className="title">3/3 SEND REPORT TO LINDSTRÖM</div>

              <div className="buttons">

                <Link className="cancel" to="/inventory">CANCEL</Link>
                <a onClick={this.submitReport}className="next">SUBMIT</a>
              </div>
            </div>}
            {this.state.page === 4 &&
            
            <div className="submitted-container">
							<div className="garment-picture">

                <div className="picture">
                	<img src={require("../img/camera.png")} alt=""/>
                </div>
               

              </div>
              <div className="complaint">
              	<div className="complaint-description">
              		<div className="complaint-label">Damage description:</div>
              		<div className="complaint-text">{this.state.complaint}</div>
              	</div>
              </div>

              <div className="thankyou">
              	<div className="thankyou-info">Thank you for your report.</div>
              	<div className="thankyou-info">You can drop the damaged garment in the laundry bin.</div>
              	<div className="thankyou-info">Your workwear will be fixed as soon as possible.</div>

              </div>


            </div>}


        </div>
      </div>
    );
  }
}

export default ReportPage;
