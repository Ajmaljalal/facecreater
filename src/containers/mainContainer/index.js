import React, { Component } from 'react'
import download from 'downloadjs'
// import Draggable from 'react-draggable';
import ImageEditor from '../../components/imagEditor'
// import testImage from '../../assets/pngs/postImages/img-2.jpg'
import Actions  from '../../components/acctionButtons'
import ArrowButton from '../../components/arrowButton'

const html_to_image = require('html-to-image');




class MainContainer extends Component {
  state = {
    currentImag: 1,
    text: ''
  }

  changeImageForward = () => {
    if(this.state.currentImag >=22){
      return;
    }
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
    // node.style.height = `${height}px`;
    html_to_image.toPng(node)
      .then(function (dataUrl) {
          // download(dataUrl, 'mypost.png');
          var link = document.createElement('a');
          link.download = 'image.png';
          link.href = dataUrl;
          link.click();
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
          // download(dataUrl, 'mypost.png');
          // var link = document.createElement('a');
          // link.download = 'image.png';
          // link.href = dataUrl;
          // link.click();
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
  }


  render() {
    const { currentImag } = this.state;
    const image = require(`../../assets/pngs/postImages/img-${currentImag}.jpg`)
    var img = new Image();
    img.src = image;
    
    return (
      <div className='main-container-w'>
          <div className='main-container__center'>
            <ArrowButton text = '<' position='left' onClick={this.changeImageBackward}/>
            <ImageEditor text='متن دلته / متن اینجا' img={image} dimensions={{width: img.width, height: img.height}}/>
            <ArrowButton text = '>' position='right' onClick={this.changeImageForward}/>
          </div>
          <Actions action={{download: this.creatPost, share: this.sharePost}} />
      </div>
    )
  }
}


export default MainContainer