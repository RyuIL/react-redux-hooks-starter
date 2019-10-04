import React from 'react';
import { createGlobalStyle } from 'styled-components';
import CalendarPage from './pages/CalendarPage';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');

  body {
    font-family: 'Roboto Mono'
  }
`;

function App() {
  return (
    <div>
      <CalendarPage />
    </div>
  );
}

export default App;
