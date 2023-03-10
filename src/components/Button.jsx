import React from 'react'

const Button = (props) => {
    return (
        <button className='button' onClick={props.toggle} > {props.best} </button>
    )
}

export default Button