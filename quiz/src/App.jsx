import React, { useState } from 'react';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import QuizComponent from './Components/QuizComponent';
import ResultComponent from './Components/ResultComponent';

function App() {


  return (
    <div className="App">
      <div className='home-component'>
        <HomeComponent />
      </div>

      <div className='quiz-component'>
        <QuizComponent />
      </div>
      
      <div className='result-component'>
        <ResultComponent />
      </div>
    </div>
  );
}

export default App;
