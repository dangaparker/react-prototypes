import React, { Component } from 'react';
import Movie from './movie';
import axios from 'axios';

class MovieContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((response) => {
            console.log('Resp: ', response)
            this.setState({
                movies: response.data.feed.entry
            })
        })
    }

    render() {
        const movieList = this.state.movies.map((item, index)=>(
            <Movie info = {item} key = {index}/>
        ))
        console.log(this.state)
        return (
            <div>
               {movieList}
            </div>
        )
    }


}

export default MovieContainer;
