import React from 'react'

const FavMovies = (props) => {
  return (
    <div className='posterBox' >
      <img className='favPoster' src={props.poster.Poster} alt="Favorite Movie" />
    </div>
  )
}

export default FavMovies