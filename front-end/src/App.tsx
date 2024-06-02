import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import FigmaEmbed from './components/FigmaEmbed';
import Buttons from './components/Buttons'

function App() {
  return (
    <div className='w-screen h-screen bg-red-100'>
      <div>
        <h1 className='text-purple font-medium italic text-8xl'>Theme Preference</h1>
      </div>
      <Buttons/>
      <div>
      <FigmaEmbed />
      </div>
      



      {/* <button className='bg-blue-100 text-6xl rounded px-4 py-2'>Click Me</button> */}
    </div>
  );
}

export default App;
