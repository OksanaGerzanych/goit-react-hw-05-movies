import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/searchAPI';
import { CiImageOff } from 'react-icons/ci'

const Cast = () => {
  const [movieCast, setMovieCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(responceMovieCast => {
      setMovieCast(responceMovieCast.cast);
    });
  }, [movieId]);

  return (
    <div>
      {movieCast.length > 0 ? (
        movieCast.map(({ id, profile_path, name, character }) => (
          <div key={id}>
            {profile_path ? <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
              width={100} 
            /> : <CiImageOff size={100} /> }
            <p>Actor: {name}</p>
            <p>Character: {character}</p>
          </div>
        ))
      ) : (
        <p>Sorry, there isn't any info</p>
      )}
    </div>
  );
};

export default Cast;
