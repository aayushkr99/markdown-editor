import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { oneDark } from '@codemirror/theme-one-dark';

const Editor = ({ markdown: value, onChange, theme }) => {
  const handleChange = (value) => {
    onChange(value);
  };

  const editorTheme = theme === 'dark' ? oneDark : undefined;

  return (
    <div className="editor-container">
      <div className="editor-header">
        <h2>Markdown Editor</h2>
        <div className="editor-actions">
          <button 
            onClick={() => onChange('# New Document\n\nStart typing here...')}
            className="action-button"
          >
            New
          </button>
          <button 
            onClick={() => {
              const blob = new Blob([value], { type: 'text/markdown' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'document.md';
              a.click();
            }}
            className="action-button"
          >
            Download Markdown
          </button>
        </div>
      </div>
      <CodeMirror
        value={value}
        height="100%"
        extensions={[
          markdown({ base: markdownLanguage, codeLanguages: languages }),
        ]}
        onChange={handleChange}
        theme={editorTheme}
        className="code-mirror-wrapper"
      />
    </div>
  );
};

export default Editor;