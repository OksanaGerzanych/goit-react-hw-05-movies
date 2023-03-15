import { fetchMovieDetails } from 'services/searchAPI';
import { useParams } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';


export const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieDetails(movieId).then(responseMovieId => {
      setMovieDetail(responseMovieId);
    });
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movieDetail;

  return (
    <main>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={300}
        />
      ) : (
        <Loader />
      )}

      <h1>{title}</h1>
      <p>User Score:{vote_average}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres && <p>{genres.map(genre => genre.name).join(', ')}</p>}
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">cast</Link>
        </li>
        <li>
          <Link to="reviews">reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
