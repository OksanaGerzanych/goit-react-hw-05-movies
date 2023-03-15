import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "services/searchAPI"

export const Reviews = () => {
  
    const [movieReviews, setMovieReview] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        fetchMovieReviews(movieId).then(responseMovieReviews => {
            setMovieReview(responseMovieReviews.results)
        })
    })

    return (
        <>
            {movieReviews.map(({id, author, content }) => {
                return (
                    <ul key={id}>
                        <li>{author}</li>
                        <li>{content}</li>
                        
                </ul>
            )
        })}
        
        </>)
}