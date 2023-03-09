import React from 'react'
import { useState, useEffect } from 'react';

const Form = (props) => {
//State to hold the data of our form
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

    //handleChange - updates formData when we type into form
    const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
    };
    
      const handleSubmit = (event) => {
        //prevent page from refreshing on form submission
        event.preventDefault();
        //pass the search term to moviesearch prop, which is apps getMovie function
        props.movieSearch(formData.searchTerm);
      };

  return (
    <div className='formBox' >
        <form onSubmit={handleSubmit} >
        <input type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm} />
        <input type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Form