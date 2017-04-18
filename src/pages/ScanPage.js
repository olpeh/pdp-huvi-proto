import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import ReportForm from '../components/ReportForm';

class ScanPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 50,
      facingMode: 'rear',
      result: 'No result',
    };

    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data) {
    this.setState({
      result: data,
    });
  }

  handleError(err) {
    console.error(err);
  }

  render() {
    const previewStyle = {
      height: '60vh',
      width: '70vw',
    };

    if (this.state.result === 'No result') {
      return (
        <div>
          <QrReader
            delay={this.state.delay}
            style={previewStyle}
            facingMode={this.state.facingMode}
            onError={this.handleError}
            onScan={this.handleScan}
          />
          <p>{this.state.result}</p>
        </div>
      );
    } else {
      return <ReportForm garmentID={this.state.result} />;
    }
  }
}

export default ScanPage;
