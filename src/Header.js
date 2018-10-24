import logo from './logo.svg';
import React from 'react';

const Header = () => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org/docs/code-splitting.html#reactlazy"
      target="_blank"
      rel="noopener noreferrer">
      Learn about React Lazy
    </a>
  </header>
);

export default Header;
