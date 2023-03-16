import PropTypes from 'prop-types';
import { MovieLink, List } from './MoviesList.styled';
import {  Outlet, useLocation } from 'react-router-dom';

export const MovieList = ({ movies }) => {

   const location = useLocation();

  return (
    <div>
      <List>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <MovieLink to={`/movies/${id}`} state={{ from: location }} >{title}</MovieLink>
            </li>
          );
        })}
      </List>
      <Outlet />
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};
