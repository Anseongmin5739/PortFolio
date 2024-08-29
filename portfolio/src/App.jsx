import React from 'react';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
