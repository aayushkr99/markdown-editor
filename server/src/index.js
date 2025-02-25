const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const markdownController = require('./controllers/markdownController.js');
const config = require('./config');
const routes = require('./routes/api');
const errorHandler = require('./middleware/errorHandler');

// Create Express app
const app = express();
const server = http.createServer(app);

// Set up CORS
app.use(cors({
  origin: config.CORS_ORIGIN,
  methods: config.CORS_METHODS,
}));
app.use(express.json());

// Set up Socket.IO with CORS
const io = new Server(server, {
  cors: {
    origin: config.CORS_ORIGIN,
    methods: config.CORS_METHODS,
  },
});

// API route for markdown processing
app.use('/api', routes);

// Global error handler
app.use(errorHandler);

// Socket.IO event handlers
io.on('connection', (socket) => {
  console.log('A client connected', socket.id);
  
  socket.on('convert-markdown', async (markdown) => {
    try {
      const html = await markdownController.processMarkdown(markdown);
      socket.emit('markdown-converted', { html });
    } catch (error) {
      console.error('Error processing markdown:', error);
      socket.emit('markdown-converted', { 
        html: '<p>Error processing markdown</p>', 
        error: error.message 
      });
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected', socket.id);
  });
});

// Start the server
server.listen( config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`);
});