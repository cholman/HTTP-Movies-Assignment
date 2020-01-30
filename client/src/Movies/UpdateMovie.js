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

    const handleChanges = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        })}

    const handleSubmit = e => {
        e.preventDefault();
        let stars
        if(movie.stars instanceof Array){
            stars = movie.stars
        }else{
            stars = movie.stars.split(",")
        }
        const payload = {
            ...movie, stars: stars
        }
        axios.put(`http://localhost:5000/api/movies/${movie.id}`, payload)
            .then(res => props.history.push(`/`))
            .catch(err => console.log(err))

            

    }
    

    return (
        <form onSubmit={handleSubmit}>
            <label>Title:
                <input
                    value={movie.title}
                    onChange={handleChanges}
                    type="text"
                    name="title"
                />
            </label>
            <label>Director:
                <input
                    value={movie.director}
                    onChange={handleChanges}
                    type="text"
                    name="director"
                />
            </label>
            <label>Meta: 
                <input
                    value={movie.metascore}
                    onChange={handleChanges}
                    type="text"
                    name="metascore"
                />
            </label>
            <label>Actors: 
                <input
                type="text"
                value={movie.stars}
                onChange={handleChanges}
                name="stars"
                ></input>
            </label>

            <button type="submit">Update Movie</button>
        </form>
    )
}

export default UpdateMovie;