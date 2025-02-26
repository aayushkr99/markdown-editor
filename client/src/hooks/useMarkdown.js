import { useState, useEffect } from 'react';
import { convertMarkdownLocal, convertMarkdownAPI, convertMarkdownSocket } from '../services/markdownService';
import config from '../config';

console.log("CONVERSION_METHOD", config.CONVERSION_METHOD);


export const useMarkdown = (initialValue = '') => {
  const [markdown, setMarkdown] = useState(initialValue);
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Don't process empty markdown
    if (!markdown.trim()) {
      setHtml('');
      return;
    }
    
    setLoading(true);
    setError(null);
    
    // Select conversion method based on the parameter
    const convertMarkdown = (() => {
      switch(config.CONVERSION_METHOD) {
        case 'local':
          // Local conversion should return a Promise for consistency
          return async (md) => Promise.resolve(convertMarkdownLocal(md));
        case 'socket':
          return convertMarkdownSocket;
        case 'api':
          return convertMarkdownAPI;
        default:
          return convertMarkdownAPI;
      }
    })();
    
    // Process markdown using the selected method
    convertMarkdown(markdown)
      .then(renderedHtml => {
        setHtml(renderedHtml);
      })
      .catch(err => {
        console.error(`Error in markdown conversion (${config.CONVERSION_METHOD}):`, err);
        setError(err.message || `Error converting markdown with ${config.CONVERSION_METHOD}`);
        setHtml('<p>Error converting markdown</p>');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [markdown]);
  
  return { 
    markdown, 
    setMarkdown, 
    html, 
    loading, 
    error
  };
};