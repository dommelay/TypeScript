import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import FigmaEmbed from './components/FigmaEmbed';
import Buttons from './components/Buttons'

function App() {
  return (
    <div className='h-screen bg-light'>
        <h1 className='text-purple font-medium italic text-8xl text-shadow'>Theme Preference</h1>
     
      <Buttons/>

      </div>
      
  );
}

export default App;
