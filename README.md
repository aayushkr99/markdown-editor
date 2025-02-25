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
│   │   │   ├── Editor.js    # Markdown editor component
│   │   │   ├── Preview.js   # Live preview component
│   │   │   ├── Header.js    # Application header
│   │   │   └── Footer.js    # Application footer
│   │   ├── App.js           # Main application component
│   │   ├── index.js         # Entry point
│   │   ├── App.css          # Global styles
│   │   └── ...
│   ├── package.json
│   └── ...
├── server/                  # Node.js backend
│   ├── src/
│   │   ├── index.js         # Server entry point
│   │   ├── routes/
│   │   │   └── api.js       # API routes
│   │   └── controllers/
│   │       └── markdown.js  # Markdown processing controller
│   ├── package.json
│   └── ...
└── README.md                # Project documentation
```

## Installation and Setup

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The server will be running at http://localhost:5000.

### Frontend Setup

1. In a new terminal, navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

   The application will open automatically at http://localhost:3000.

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