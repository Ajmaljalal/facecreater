import React, { Component } from 'react';
  
class Edit extends Component {
    state = {
        bgColor: '#fff000',
        color: '#rrggbb',
        font: 'Bahij Jalal'
    }

    handleBgColor = (e) => {
        this.setState({
            bgColor: e.target.value
        })
        this.props.handleFontStyles(e)
    }

    handleColor = (e) => {
        this.setState({
            color: e.target.value
        })
        this.props.handleFontStyles(e)
    }

    handleFontChange = (e) => {
        console.log(e.target)
        this.props.handleFontStyles(e)
    }

    fonts = [
        'Bahij Jalal',
        "Bahij Yakout",
        'Bahij Titr',
        'Bahij Nassim',
        'Bahij Nazanin',
        'Bahij Aban',
        'Bahij Badr' 
    ]

    renderFonts = () => {
        return this.fonts.map(font => {
            return (
                <option>{font}</option>
            )
        })
    }

    render() {
        const { handleFontStyles } = this.props;
        return (
            <React.Fragment>
                <div className='edit-buttons'>
                Font: <select name='fontfamily' onChange={this.handleFontChange}>
                        {this.renderFonts()}
                    </select>
                    <button className='edit-buttons__fontup' name='fontUp' onClick={handleFontStyles}>A+</button>
                    <button className='edit-buttons__fontdown' name='fontDown' onClick={handleFontStyles}>A-</button>
                    <button><i class="fas fa-align-right" name='right' onClick={handleFontStyles}></i></button>
                    <button><i class="fas fa-align-center" name='center' onClick={handleFontStyles}></i></button>
                    <button><i class="fas fa-bold" name='fontWeight' onClick={handleFontStyles}></i></button>
                    <button><i class="fas fa-italic" name='italic' onClick={handleFontStyles}></i></button>
                    <button><i class="fas fa-underline" name='underline' onClick={handleFontStyles}></i></button>
                    <button><i class="fas fa-list-ul"></i></button>
                    <button><i class="fas fa-list-ol"></i></button>
                    <div className='edit-buttons__bgcolor'><input type="color" id="head" name="bgColor" onChange={this.handleBgColor} value={this.state.bgColor}/></div>
                    <div className='edit-buttons__fontcolor'><input type="color" id="head" name="fontColor" onChange={this.handleColor} value={this.state.color}/></div>
                    <button className='edit-buttons__emoji' style={{color: 'purple'}}><i class="far fa-smile-wink"></i></button>
                </div>
            </React.Fragment>
        )
    }
}
export default Edit