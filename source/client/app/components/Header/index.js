import React from 'react';
import { Link } from 'react-router-dom';


export const Header = () => (
  <header className="s-header ">
    <div className="container">
      <nav className="s-header__nav" role="navigation">
        <Link to="/" className="s-header__nav-item">Home</Link>
        <Link to="/about" className="s-header__nav-item">About</Link>
      </nav>
    </div>
  </header>
);
