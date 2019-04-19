import React, { Component } from 'react'
// import {FacebookShareButton} from 'react-share'

class Actions extends Component {
    state = {}

    render() {
        return (
            <div className='actions'>
                {/* <FacebookShareButton
                    url={'https://pngtree.com/freebackground/paper-cut-wind-microscopic-origami-flower_928618.html'}
                    quote={'title'}
                >
                <button>
                    فیسبوک
                </button>
                </FacebookShareButton> */}
                <button onClick={this.props.action.download}>ډانلوډ</button>
            </div>
        )
    }
}

export default Actions