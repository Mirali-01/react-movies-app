import React from 'react'

const Button = (props) => {
    return (
        <button className='favButton' onClick={props.moviePoster} > {props.fav} </button>
    )
}

export default Button