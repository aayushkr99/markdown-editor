import React from 'react';

const Footer = () => {
  return (
    <footer className="app-footer">
      <p>
        Advanced Markdown Editor with Real-time Preview - 
        {' '}{new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;