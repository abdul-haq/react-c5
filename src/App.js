import React from 'react';
import logo from './logo.svg';
import './App.css';
import ValueContext from './ValueContext';
import Parent from './Parent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Context Api and use Reducer</h1>
      <hr></hr>
      <ValueContext.Provider value={React.useState(50)}>
      <Parent></Parent>
      </ValueContext.Provider>
    </div>
  );
}

export default App;
