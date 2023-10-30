import React from 'react';
import Movie from './Components/Movie'; // Movie 컴포넌트를 가져옵니다.
import { movies } from './movieDummy'; // 영화 데이터를 가져옵니다.
import { GlobalStyles, AppContainer, MovieListContainer } from './GlobalStyles.style';

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <div className="app-container"> {/* 필요하면 이 div에도 별도의 styled-component 적용 가능 */}
        <MovieListContainer>
          {movies.results.map((movie) => (
            <Movie
              key={movie.id}
              title={movie.title}
              posterPath={movie.poster_path}
              voteAverage={movie.vote_average}
              overview={movie.overview}
            />
          ))}
        </MovieListContainer>
      </div>
    </AppContainer>
  );
}

export default App;
