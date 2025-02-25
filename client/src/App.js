// src/App.js
import React, { useState, useEffect } from 'react';
import SplitPane from 'split-pane-react/esm/SplitPane';
import Editor from './components/editor/EditorPane';
import Preview from './components/editor/PreviewPane';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { useMarkdown } from './hooks/useMarkdown';
import { useTheme } from './hooks/useTheme';
import { initSocket, closeSocket } from './services/socket';
import 'split-pane-react/esm/themes/default.css';
import './App.css';

const App = () => {
  const { markdown, setMarkdown, html } = useMarkdown('# Hello, Markdown!\n\nStart typing here to see the live preview...');
  const { theme, toggleTheme } = useTheme();
  const [sizes, setSizes] = useState(['50%', '50%']);

  // Initialize socket connection
  useEffect(() => {
    initSocket();
    return () => {
      closeSocket();
    };
  }, []);

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <div className="container">
        <SplitPane
          split="vertical"
          sizes={sizes}
          onChange={setSizes}
          sashRender={() => <div className="sash" />}
        >
          <Editor 
            markdown={markdown} 
            onChange={setMarkdown} 
            theme={theme} 
          />
          <Preview 
            html={html} 
            theme={theme} 
          />
        </SplitPane>
      </div>
      <Footer />
    </div>
  );
};

export default App;