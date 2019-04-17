import React, { Component } from 'react'

class Edit extends Component {
    state = {}
    render() {
        return (
            <div className='edit-buttons'>
                Font: <select>
                    <option>Ajmal Jalal</option>
                    <option>tow</option>
                    <option>three</option>
                    <option>four</option>
                </select>
                <button className='edit-buttons__fontup'>A+</button>
                <button className='edit-buttons__fontdown'>A-</button>
                <button><i class="fas fa-align-right"></i></button>
                <button><i class="fas fa-align-center"></i></button>
                <button><i class="fas fa-bold"></i></button>
                <button><i class="fas fa-italic"></i></button>
                <button><i class="fas fa-underline"></i></button>
                <button><i class="fas fa-list-ul"></i></button>
                <button><i class="fas fa-list-ol"></i></button>
                <button>--</button>
                <button className='edit-buttons__bgcolor' style={{color: 'green'}}><i class="fas fa-palette"></i></button>
                <button className='edit-buttons__fontcolor' style={{color: 'red'}}><i class="fas fa-square"></i></button>
                <button className='edit-buttons__emoji' style={{color: 'purple'}}><i class="far fa-smile-wink"></i></button>
            </div>
        )
    }
}


export default Edit