import React from 'react'

function MovieItem({title, time, genres}){
    const listOfGenres = genres.map((genre,index) => <li key={index}>{genre}</li>)
    return (
        <div>
            <h2>Name:{title}</h2>
            <p>Time: {time}</p>
            <h2>Genres:</h2>
            <ul>
                {listOfGenres}
            </ul>
        </div>
    );
}

export default MovieItem;