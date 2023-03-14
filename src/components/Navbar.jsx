import React from 'react'
import Button from './Button'

const Navbar = (props) => {
  return (
    <div className='navbar'>
      <div className="leftNav">
        <Button fav={"Favorite Movies"} moviePoster={props.moviePoster} />
      </div>

      <div className="centerNav">
        <img className='logo' src="https://www.freepnglogos.com/uploads/film-reel-png/film-reel-the-movies-owens-valley-12.png" alt="" />
      </div>

      <div className="rightNav"></div>

    </div>
  )
}

export default Navbar