import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: #22254b;
    font-family: Arial, sans-serif;
  }
`;

export const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

export const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 20px;
  justify-content: center;
  margin: 20px;
`;
