import React, { Component } from 'react'
// import bgImg from '../../assets/pngs/bg-image.png'
import Header from '../header'
import MainContainer from '../mainContainer'
import Footer from '../footer'


class Home extends Component {
  state = {}
  render() {
    return (
      <div className='main-wrapper'>
        <div className='main-content'> <MainContainer /> </div>
        <div className='footer'> <Footer /> </div>
      </div>
    )
  }
}

export default Home;