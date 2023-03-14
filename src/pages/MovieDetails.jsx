
import { Link, Outlet } from 'react-router-dom';

export const MovieDetails = () => {
    // const { movieId} = useParams();
  return (
    <main>
      
          <h2>Additional information</h2>
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
