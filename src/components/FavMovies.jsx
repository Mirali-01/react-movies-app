import React from 'react'

const FavMovies = (props) => {
  return (
    <div className='favorite' >
      <img src={props.poster.Poster} alt="Favorite Movie" />
    </div>
  )
}

export default FavMovies