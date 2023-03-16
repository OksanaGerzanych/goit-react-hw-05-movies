import { fetchMovieDetails } from 'services/searchAPI';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { GoBack } from 'components/GoBack/GoBack';
import { Suspense } from 'react';

const MovieDetails = () => {
  const [movieDetail, setMovieDetail] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? `/movie`;

  useEffect(() => {
    fetchMovieDetails(movieId).then(responseMovieId => {
      setMovieDetail(responseMovieId);
    });
  }, [movieId]);

  const { poster_path, title, vote_average, overview, genres } = movieDetail;

  return (
    <>
      <GoBack to={backLinkHref} />
      <div>
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
            <Link to="cast" state={{ ...location.state }}>
              cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ ...location.state }}>
              reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default MovieDetails;
