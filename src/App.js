import React, { Component } from 'react'
import QrReader from 'react-qr-reader'

class App extends Component {
  state = {
    result: 'No result'
  }

  handleScan = data => {
    if (data) {
      this.setState({
        result: JSON.parse(data)
      })
    }
  }
  handleError = err => {
    console.error(err)
  }
  render() {
    return (
      <div>
          <a href="https://wa.me/?text=Hello%20world!">Say hello</a>
        {/* <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p> */}
      </div>
    )
  }
}

export default App;