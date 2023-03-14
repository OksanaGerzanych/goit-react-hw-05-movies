import PropTypes from 'prop-types';
import { MovieLink, List } from './MoviesList.styled';
import {  Outlet } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <div>
      <List>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <MovieLink to={`/movies/${id}`}>{title}</MovieLink>
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
