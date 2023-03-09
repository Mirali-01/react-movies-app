import React from 'react'

const MovieDisplay = (props) => {

 const loaded = () => {
    return (
      <div className='movieDetails' >
        <div className="left">
        <h1>{`${props.currentMovie.Title} (${props.currentMovie.Year})`}</h1>
        <img src={props.currentMovie.Poster} alt={props.currentMovie.Title} />
        </div>
        
        <div className="right">
        <h1>Genre</h1>
        <h2>{props.currentMovie.Genre}</h2>
        <h1>Synopsis</h1>
        <h2>{props.currentMovie.Plot}</h2>
        </div>
        
      </div>
    );
  };

  //function to return loading JSX
  const loading = () => {
    return <h1>No Movie to Display</h1>;
  };

  //Ternary operator will determine which functions JSX we will return
  return props.currentMovie ? loaded() : loading();
}

export default MovieDisplay