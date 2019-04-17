import React, { Component } from 'react'
import Draggable from 'react-draggable';
// import Image from 'react-image-resizer';
// const Resizable = require('react-resizable').Resizable;

class ImageEditor extends Component {
    state = {}
    
    render() {
        return (
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
                            <textarea maxLength='400' autoFocus={true} placeholder={this.props.text}/>
                        {/* </Draggable> */}
                    </div>
                </Draggable>
            </div>
        )
    }
}

export default ImageEditor