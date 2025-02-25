import React from 'react';

const Header = ({ theme, toggleTheme }) => {
  return (
    <header className={`app-header ${theme}`}>
      <div className="logo">
        <h1>Markdown Editor</h1>
      </div>
      <nav className="header-nav">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
        <a 
          href="https://www.markdownguide.org/basic-syntax/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="help-link"
        >
          Markdown Help
        </a>
      </nav>
    </header>
  );
};

export default Header;