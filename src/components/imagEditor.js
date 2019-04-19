import React, { Component } from 'react'
import Draggable from 'react-draggable';
import EditButtons from './editButtons';
import map from '../assets/pngs/map.jpg';
import  wallmap from '../assets/pngs/wallmap.jpg';
import flag from '../assets/pngs/flag.png';
// import Image from 'react-image-resizer';
// const Resizable = require('react-resizable').Resizable;

class ImageEditor extends Component {
    state = {
        textAlign: 'center',
        fontSize: '40',
        color: 'black',
        fontFamily: "Bahij Titr",
        underLine: false,
        orderedList: false,
        unorderedList: false,
        hLine: false,
        bgColor: 'none',
        emoji: 'none',
        fontWeight: 'normal',
        italic: 'none',
        textDecor: 'normal'
    }

    handleFontStyles  = (e) => {
        let fontSize = this.state.fontSize;
        switch (e.target.getAttribute('name')) {
            case 'fontUp':
                this.setState({
                    fontSize: ++fontSize
                })
                break;
            case 'fontDown':
                this.setState({
                    fontSize: --fontSize
                })
                break;
            case 'right':
                this.setState({
                    textAlign: 'right'
                })
                break;
            case 'center':
                this.setState({
                    textAlign: 'center'
                })
                break;
            case 'underLine':
                this.setState({
                    underLine: true,
                })
                break;
            case 'fontWeight':
                this.setState({
                    fontWeight: this.state.fontWeight === 'bold' ? 'normal' : 'bold'
                })
                break;
            case 'italic':
                this.setState({
                    italic: this.state.italic === 'italic' ? 'normal' : 'italic'
                })
                break;
            case 'underline':
                this.setState({
                    textDecor: this.state.textDecor === 'underline' ? 'none' : 'underline'
                })
                break;
            case 'hLine':
                this.setState({
                    hLine: true
                })
                break;
            case 'bgColor':
                this.setState({
                    bgColor: e.target.value
                })
                break;
            case 'fontColor':
                this.setState({
                    color: e.target.value
                })
                break;
            case 'fontfamily':
                console.log(e.target.value)
                this.setState({
                    fontFamily: e.target.value
                })
                break;

            default:
                break;
        }
        
    }
    
    render() {
        
        const { fontSize, fontWeight, textAlign, italic, textDecor, bgColor, color, fontFamily } = this.state;
        return (
            <div className='image-editor-w'>
                <Draggable enableUserSelectHack={false}>
                    <div className='main-container__edit'>
                        <EditButtons handleFontStyles = {this.handleFontStyles} />
                    </div>
                </Draggable>
                <div className='image-editor' id='post' 
                    style={{ 
                        backgroundImage: `url(${this.props.img})`,
                        backgroundPosition: 'center',
                        backgroundSize: '100% auto',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <Draggable bounds="parent" enableUserSelectHack={false}>
                        <div className='image-editor__text'>
                            {/* <Draggable bounds="parent" enableUserSelectHack={false}> */}
                                <textarea 
                                    maxLength='400' 
                                    autoFocus={true} 
                                    placeholder={this.props.text}
                                    style = {{
                                        fontSize: `${fontSize}px`,
                                        fontWeight: fontWeight,
                                        textAlign: textAlign,
                                        fontFamily: fontFamily,
                                        fontStyle: italic,
                                        textDecoration: textDecor,
                                        backgroundColor: bgColor,
                                        opacity: this.state.bgColor !== 'none' ? '0.7' : '1',
                                        color: color
                                    }}
                                />
                            {/* </Draggable> */}
                        </div>
                    </Draggable>
                    <div className='image-editor__footer'>
                        <img src={map} alt='map'/>
                        <img src={flag} alt='mapflag'/>
                        <img src={wallmap} alt='mapflag'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ImageEditor