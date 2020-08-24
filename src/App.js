import React, { Component } from 'react'
import QrReader from 'react-qr-reader'
import axios from 'axios';

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

  componentDidMount = async() => {
    const data = {
      identifier: "+2348057661075",
      password: "Password12345@"
     }
    // const res = await axios.post('http://178.128.44.156:4040/api/auth/login', data)
    const resData = await axios.get('http://178.128.44.156:4040/api/legal/about')
    // if(res){
    //   alert('success')
    //   console.log(res.data)
    // }

    if(resData){
      alert('get success')
      console.log(resData.data)
    }
  }

  render() {
    return (
      <div>
        Login Page
          {/* <a href="https://wa.me/?text=Hello%20world!">Say hello</a> */}
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