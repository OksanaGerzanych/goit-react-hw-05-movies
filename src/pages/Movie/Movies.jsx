import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchSearchMovies } from 'services/searchAPI';
import { MovieList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';
import { MovieContainer } from './Movie.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const nameMovie = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!nameMovie) {
      return;
    }
    setMovies([]);
    setLoading(true);

    fetchSearchMovies(nameMovie)
      .then(responseMovies => {
        setMovies(responseMovies.results);
      })
      .catch(error => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }, [nameMovie]);

  const handelSubmit = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
    console.log(nextParams)
    // setMovies([]);
  };

   
  return (
    < MovieContainer>
      {error && <h2>{error.message}</h2>}
      <SearchBox  onSubmit={handelSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {loading && <Loader />}
    </ MovieContainer>
  );
};
export default Movies;
