import React from 'react'

const  ArrowButton = (props) => {
  return(
    <button 
      className={`arrow-button ${props.position}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
   )
 }

export default  ArrowButton