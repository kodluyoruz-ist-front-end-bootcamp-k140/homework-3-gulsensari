import './App.css';
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import HomePage from './components/homePage';


function App() {

  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
