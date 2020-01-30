import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Movie from './Movie';


const UpdateMovie = props => {
     const [movie, setMovie] = useState(props.movie);
    // const { id } = useParams();

    // useEffect(() => {
    //     const itemToUpdate = props.items.find(thing => `${thing.id}` === id);

    //     if (itemToUpdate) {
    //         setItem(itemToUpdate);
    //     }
    // }, [props.items, id]);
    console.log(props);

    return (
        <form>
            <label>Title:
                <input
                    value={movie.title}
                    type="text"
                />
            </label>
            <label>Director:
                <input
                    value={movie.director}
                />
            </label>
            <label>Meta: 
                <input
                    value={movie.metascore}
                />
            </label>
            <label>Actors: 
                {props.movie.stars.map(star => {
                    console.log(star);
                    return <input
                            value={star}
                          />
                })}
            </label>

            <button>Update Movie</button>
        </form>
    )
}

export default UpdateMovie;