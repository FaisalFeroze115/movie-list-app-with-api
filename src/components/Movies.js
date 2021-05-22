import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import './movies.css'
import CircularProgress from '@material-ui/core/CircularProgress'

const API_KEY = 'eb7f19c3';
const series = ['avengers', 'fast and furious', 'iron man', 'harry potter', 'lord of the ring'];

const Movies = () => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const promises = series.map(series =>{
            return fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(series)}&apikey=${API_KEY}`)
            .then(res=> res.json())
        })

        Promise.all(promises).then(movies=>{
            setMovies(movies.map(movie =>movie.Search));
        })


    },[])

    if(movies.length===0){
        return (
            <div className="loader">
                <CircularProgress />
            </div>
        )
    }

    return (
        <div className="movies_container">
            {
                movies.map(first_child=>
                    first_child.map(movi=>
                        <Movie
                            key={movi.imdbID}
                            title={movi.Title}
                            year={movi.Year}
                            poster={movi.Poster}
                        />
                    )
                )
            }


            {console.log('api movies',movies)}
        </div>
    )
}

export default Movies
