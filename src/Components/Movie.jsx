import React from 'react';
import { StyledMovie, MovieImage, MovieDescription, MovieInfo } from './Movie.style';

function Movie(props) {
  return (
    <StyledMovie>
      <MovieImage src={props.posterPath} alt={props.title} />
      <MovieDescription>
        <div className="movie-description-title">{props.title}</div>
        <p>{props.overview}</p>
      </MovieDescription>
      <MovieInfo>
        <div className="movie-title">{props.title}</div>
        <div className="movie-rating">{props.voteAverage}</div>
      </MovieInfo>
    </StyledMovie>
  );
}

export default Movie;
