import React, { useRef, useEffect } from 'react';

const Preview = ({ html, isProcessing, theme }) => {
  const previewRef = useRef(null);
  const scrollPosRef = useRef(0);
  
  // Save scroll position before update
  useEffect(() => {
    if (previewRef.current) {
      scrollPosRef.current = previewRef.current.scrollTop;
    }
  }, [html]);
  
  // Restore scroll position after update
  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.scrollTop = scrollPosRef.current;
    }
  }, [html]);

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h2>Preview</h2>
        <div className="preview-actions">
          <button 
            onClick={() => {
              const blob = new Blob([html], { type: 'text/html' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'document.html';
              a.click();
            }}
            className="action-button"
          >
            Download HTML
          </button>
          <button 
            onClick={() => {
              const printWindow = window.open('', '_blank');
              printWindow.document.write(`
                <html>
                  <head>
                    <title>Markdown Preview</title>
                    <style>
                      body { font-family: Arial, sans-serif; line-height: 1.6; }
                      code { background: #f4f4f4; padding: 0.2rem 0.4rem; border-radius: 3px; }
                      pre { background: #f4f4f4; padding: 1rem; border-radius: 3px; overflow-x: auto; }
                      blockquote { border-left: 3px solid #ccc; padding-left: 1rem; color: #777; }
                      img { max-width: 100%; }
                    </style>
                  </head>
                  <body>
                    ${html}
                  </body>
                </html>
              `);
              printWindow.document.close();
              printWindow.print();
            }}
            className="action-button"
          >
            Print
          </button>
        </div>
      </div>
      <div 
        ref={previewRef} 
        className="preview-content"
      >
        <div 
          className={`rendered-html ${theme}`}
          dangerouslySetInnerHTML={{ __html: html }} 
        />
      </div>
    </div>
  );
};

export default Preview;