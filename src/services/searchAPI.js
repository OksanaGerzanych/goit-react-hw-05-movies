import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '37314a167a558e9a6582597c5654a5d7';
const TREND_URL = `${BASE_URL}/trending/movie/week`;
const SEARCH_URL = `${BASE_URL}/search/movie`;
const DETALS_URL = `${BASE_URL}/movie`;

export const fetchSearchMovies = async (query) => {
try {
  const response = await axios.get(`${SEARCH_URL}?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
  return response.data;
  }catch (error) {
    console.error(error.message);
  }
};

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`${TREND_URL}?api_key=${API_KEY}&page=1`) 
  return response.data;
  } catch (error) {
     console.error(error.message);
  }
  
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${DETALS_URL}/${id}?api_key=${API_KEY}&language=en-US`) 
    return response.data;
    
  } catch (error) {
    console.error(error.message);
  }
 
};

export const fetchMovieCast = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`) 
    return response.data;
    
  } catch (error) {
    console.error(error.message);
  }
 
};

export const fetchMovieReviews = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`) 
    return response.data
  } catch (error) {
    console.error(error.message);
  }
}
