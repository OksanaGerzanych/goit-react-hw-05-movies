import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MovieDetails } from '../pages/MovieDetails';
//import { Cast } from './Cast';
//import { Reviews } from './Reviews';
//import { SharedLayout } from "./SharedLayout";
import { Container, Header, Link } from './SharedLayout.styled';

export const App = () => {
  return (
    
      <Container>
        <Header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </nav>
        </Header>
      
      <Routes>
        {/* <Route path="/" element={<SharedLayout />}>
        <Route index element={ <Home /> } /> */}

        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}></Route>
          {/* <Route path="/cast" element={<Cast />} />
          <Route path="/reviews" element={<Reviews />} /> */}
        
        <Route path="*" element={<Home />} />
      </Routes>
    </Container>
  );
};
