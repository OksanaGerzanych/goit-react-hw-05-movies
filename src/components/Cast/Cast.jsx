import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "services/searchAPI"


export const Cast = () => {
    const [movieCast, setMovieCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchMovieCast(movieId).then(responceMovieCast => {
            setMovieCast(responceMovieCast.cast)
        }, [movieId]);
        })

    return (
        <div>
            {movieCast.length > 0 ? movieCast.map(({ id, profile_path, name, character }) => (
                <div key={id}>
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} width={100} />
                    <p>Actor: {name}</p>
                    <p>Character: {character}</p>
                </div>
            )) : <p>Sorry, there isn't any info</p>}
        </div>);
}