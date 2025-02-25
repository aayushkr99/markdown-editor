import { useState, useEffect } from 'react';
import { convertMarkdownLocal } from '../services/markdownService';

export const useMarkdown = (initialValue = '') => {
  const [markdown, setMarkdown] = useState(initialValue);
  const [html, setHtml] = useState('');
  
  useEffect(() => {
    // Process markdown locally for instant preview
    const renderedHtml = convertMarkdownLocal(markdown);
    setHtml(renderedHtml);
  }, [markdown]);
  
  return { markdown, setMarkdown, html };
};