import React, { Component } from 'react'
// import {FacebookShareButton} from 'react-share'

class Actions extends Component {
    state = {}

    render() {
        return (
            <div className='actions'>
                <button onClick={this.props.action.download}>ډانلوډ</button>
            </div>
        )
    }
}

export default Actions