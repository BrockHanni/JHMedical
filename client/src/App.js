import React from 'react';
import footer from './components/Footer.js';
import header from './components/Header.js';
import home from './components/Home.js';
import products from './components/Products.js';
import review from './components/Review.js';
import signin from './components/Signin.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
