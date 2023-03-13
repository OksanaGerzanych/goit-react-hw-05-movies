import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link></Link>
        </li>
      ))}
    </ul>
  );
};
