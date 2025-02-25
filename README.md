# Real-time Markdown Editor with Live Preview

A real-time Markdown editor application built with React and Node.js that provides live preview of HTML conversion.

![Markdown Editor Screenshot](https://via.placeholder.com/800x400?text=Markdown+Editor+Screenshot)

## Features

- 💻 React-based Markdown editor with syntax highlighting
- 🔄 Real-time HTML preview as you type
- 🌓 Light and dark theme support
- 📱 Responsive split-pane layout
- 🔌 Socket.IO for real-time updates
- 📥 Download options for both Markdown and HTML
- 🖨️ Print functionality
- ⚡ Efficient Markdown-to-HTML conversion

## Advanced Features

- Syntax highlighting for both the editor (using CodeMirror) and the rendered code blocks (using highlight.js)
- Live WebSocket updates via Socket.IO for real-time conversion
- Split pane with adjustable divider
- Dark/light theme toggle
- Export functionality for both Markdown and HTML
- Print preview functionality
- Server-side Markdown processing with sanitization
- Debounced processing to prevent excessive server requests

## Project Structure

```
markdown-editor/
├── client/                  # React frontend
│   ├── public/
│   │   ├── index.html
│   │   └── ...
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   └── Button.js    # Reusable button component
│   │   │   ├── editor/
│   │   │   │   ├── EditorPane.js  # Markdown editor component
│   │   │   │   └── PreviewPane.js # Live preview component
│   │   │   └── layout/
│   │   │       ├── Header.js    # Application header
│   │   │       └── Footer.js    # Application footer
│   │   ├── config/
│   │   │   └── index.js         # Configuration settings
│   │   ├── hooks/
│   │   │   ├── useMarkdown.js   # Custom hook for markdown processing
│   │   │   └── useTheme.js      # Custom hook for theme management
│   │   ├── services/
│   │   │   ├── api.js           # General API service
│   │   │   ├── markdownService.js # Markdown processing service
│   │   │   └── socket.js        # WebSocket service
│   │   ├── App.js               # Main application component
│   │   ├── index.js             # Entry point
│   │   ├── App.css              # Global styles
│   │   └── ...
│   ├── package.json
│   └── ...
├── server/                  # Node.js backend
│   ├── src/
│   │   ├── config/
│   │   │   └── index.js         # Server configuration
│   │   ├── controllers/
│   │   │   └── markdownController.js  # Markdown processing controller
│   │   ├── middleware/
│   │   │   └── errorHandler.js  # Error handling middleware
│   │   ├── routes/
│   │   │   └── api.js           # API routes
│   │   └── index.js             # Server entry point
│   ├── package.json
│   └── ...
├── package.json             # Root package.json for monorepo setup
├── package-lock.json        # Dependencies lock file
└── README.md                # Project documentation
```

## Installation and Setup

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Project Setup

1. Clone the Repository:
   ```bash
   git clone https://github.com/aayushkr99/markdown-editor.git
   ```

2. Navigate to the project root directory:
   ```bash
   cd markdown-editor
   ```

3. Install Dependencies:
   ```bash
   npm install:all
   ```

4. Start the Application ( It will start both Backend and Frontend ):
   ```bash
   npm start
   ```

5. Start the Backend Application only ( optional ):
   ```bash
   npm run server
   ```

6. Start the Frontend Application only ( optional ):
   ```bash
   npm run client
   ```


   The Backend server will be running at http://localhost:5000.
   The Frontend server will be running at http://localhost:3000.


## Usage

1. Type Markdown syntax in the left editor pane.
2. View the real-time HTML preview in the right pane.
3. Use the "New" button to start a new document.
4. Download your content as Markdown or HTML using the download buttons.
5. Toggle between light and dark themes using the theme toggle button.
6. Resize the editor and preview panes by dragging the divider.

## Markdown Syntax Support

The editor supports standard Markdown syntax, including:

- Headers (# H1, ## H2, etc.)
- Emphasis (*italic* and **bold**)
- Lists (ordered and unordered)
- Links ([text](url))
- Images (![alt](url))
- Code blocks (inline `code` and ```fenced code blocks```)
- Blockquotes (> quote)
- Horizontal rules (---)
- Tables

## Technologies Used

- **Frontend**:
  - React
  - CodeMirror for the Markdown editor
  - Socket.IO client for real-time updates
  - Split-pane for the layout
  - marked.js for Markdown parsing (client-side fallback)

- **Backend**:
  - Node.js
  - Express
  - Socket.IO for WebSockets
  - marked.js for Markdown to HTML conversion
  - highlight.js for syntax highlighting

## Future Enhancements

- File system integration for saving documents
- User authentication and document sharing
- Collaborative editing with multiple users
- Custom Markdown extensions
- Mobile app version
- Export to PDF
- Version history and diff view

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.