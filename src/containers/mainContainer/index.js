import React, { Component } from 'react'
import ImageEditor from '../../components/imagEditor'
// import testImage from '../../assets/pngs/postImages/img-2.jpg'
import Actions  from '../../components/acctionButtons'
import ArrowButton from '../../components/arrowButton'
import download from 'downloadjs'

const html_to_image = require('html-to-image');




class MainContainer extends Component {
  state = {
    currentImag: 10,
    text: ''
  }

  changeImageForward = () => {
    this.setState({
      currentImag: this.state.currentImag + 1
    })
  }

  changeImageBackward = () => {
    if(this.state.currentImag <=1){
      return;
    }
    this.setState({
      currentImag: this.state.currentImag - 1
    })
  }


  creatPost = () => {
    const node = document.getElementById('post');
    html_to_image.toPng(node)
      .then(function (dataUrl) {
          // const img = new Image();
          // img.src = dataUrl;
          download(dataUrl, 'mypost.png');
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
  }

  sharePost = () => {
    const node = document.getElementById('post');
    html_to_image.toPng(node)
      .then(function (dataUrl) {
          // const img = new Image();
          // img.src = dataUrl;
          download(dataUrl, 'mypost.png');
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
  }


  render() {
    const { currentImag } = this.state;
    const image = require(`../../assets/pngs/postImages/img-${currentImag}.jpg`)
    console.log(image)
    // image = require(`../../assets/pngs/postImages/img-${currentImag}.png`)
    
    return (
      <div className='main-container-w'>
        <div className='main-container__edit'></div>
        <div className='main-container__center-w'>
          <div className='main-container__center-w__right'>
            <ArrowButton text = '<' position='left' onClick={this.changeImageBackward}/>
            <ImageEditor text='دلته خپل متن ولیکئ' img={image}/>
            <ArrowButton text = '>' position='right' onClick={this.changeImageForward}/>
          </div>
          <Actions action={{download: this.creatPost, share: this.sharePost}} />
        </div>
        <div className='main-container__right-menu'>

        </div>
      </div>
    )
  }
}


export default MainContainer