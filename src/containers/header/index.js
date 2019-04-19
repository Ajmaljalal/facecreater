import React, { Component } from 'react'
import logo from '../../assets/pngs/header-logo.png'


class Header extends Component {
    state = {}
    render() {
        return (
            <div className='header-w'>
                <div className='header__logo'> 
                <img src ={logo} alt='logo'/>
                </div>
                <div className='header__title'> ښکلا </div>
            </div>
        )
    }
}


export default Header