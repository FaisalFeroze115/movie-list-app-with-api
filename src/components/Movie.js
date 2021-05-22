import React from 'react'
import './movie.css';

const Movie = ({key, title, year, poster}) => {
    return (
        <div className="movie" key={key}> 
            <p>{title}</p>
            <img src={poster}/>
            <p>{year}</p>
        </div>
    )
}

export default Movie
