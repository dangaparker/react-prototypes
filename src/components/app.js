import React from 'react';
import Movie from './movie';
import MovieContainer from './movie_container';

export default ()=> {
    return (
        <div className = 'container'>
            <h1 className = 'text-center'>Axios Demo</h1>
            <MovieContainer/>
        </div>
    )
}

