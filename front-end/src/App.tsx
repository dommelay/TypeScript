import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import FigmaEmbed from './components/FigmaEmbed';
import Buttons from './components/Buttons';
import { TaskManager } from './components/task_manager';
import { ThemeProvider, useTheme } from './components/ThemeContext';

const App: React.FC = () => {
  return (
    // <ThemeProvider>
    //   <AppContent />
    // </ThemeProvider>
    <>
    <TaskManager/>
    </>
  );
};

const AppContent: React.FC = () => {
  const { color } = useTheme();

  return (
    <div className={`App h-screen ${color}`}>
      <h1 className='text-purple font-medium italic text-8xl text-shadow'>Theme Preference</h1>
      <Buttons />
      
    </div>
  );
};

export default App;
