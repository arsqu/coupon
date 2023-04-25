import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { enquireScreen } from 'enquire-js'
import Header from './Home/Nav3'
import Footer from './Home/Footer2'
import Home from './Home'
import Home2 from './Home2'
import { Nav30DataSource, Footer20DataSource } from './Home/data.source.js'

let isMobile
enquireScreen((b) => {
  isMobile = b
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile,
    }
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b })
    })
  }
  render() {
    return (
      <>
        <Header dataSource={Nav30DataSource} isMobile={this.isMobile} />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home2" element={<Home2 />} />
          </Routes>
        </Router>
        <Footer dataSource={Footer20DataSource} isMobile={this.isMobile} />
      </>
    )
  }
}

export default App
