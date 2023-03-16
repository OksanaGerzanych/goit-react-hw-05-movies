import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'services/searchAPI';

const Reviews = () => {
  const [movieReviews, setMovieReview] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieReviews(movieId).then(responseMovieReviews => {
      setMovieReview(responseMovieReviews.results);
    });
  }, [movieId]);

  return (
    <>
      {movieReviews > 0
        ? movieReviews.map(({ id, author, content }) => {
            return (
              <ul key={id}>
                <li>{author}</li>
                <p>{content}</p>
              </ul>
            );
          })
        : 'Sorry, we dont have any review for this movie'}
    </>
  );
};

export default Reviews;
